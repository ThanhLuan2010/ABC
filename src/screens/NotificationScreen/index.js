import { baseQuery } from "@api/baseQuery";
import { Block, Header, Text } from "@components";
import { navigate } from "@navigation/RootNavigation";
import { theme } from "@theme";
import { setLoading } from "@utils/navigator";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TopTab from "./TopTab";
import { useNavigation } from "@react-navigation/native";
import { dispatch } from "@store/configStore";
import { setisNewNoti } from "@store/slices/notification";

const NotificationScreen = () => {
  const [indexTab, setindexTab] = useState(0);
  const [notiData, setnotiData] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const ubsubcribe = navigation.addListener("focus", () => {
      getData();
    });
    return ubsubcribe;
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await baseQuery({
      url: "noti/list",
    });
    setLoading(false);
    setrefreshing(false);
    if (response.data.data?.length > 0) {
      const check = response.data.data?.some((item) => item.status === 0);
      if (check) {
        dispatch(setisNewNoti(true));
      } else {
        dispatch(setisNewNoti(false));
      }
    }
    if (response.status && response.data) {
      if (response.data.current_page === 1) {
        setnotiData(response.data.data);
      } else {
        setnotiData(notiData?.concat(response.data.data));
      }
    }
  };

  const renderEmpty = () => {
    return (
      <Block flex justifyCenter>
        <Text size={20} center color={theme.colors.bg_opacity}>
          Danh sách trống
        </Text>
      </Block>
    );
  };
  const seen = async (item) => {
    const response = await baseQuery({
      url: "noti/seen",
      method: "POST",
      body: {
        id: item?.notification_id,
      },
    });
  };

  const seeAll = async () => {
    setLoading(true);
    const response = await baseQuery({
      url: "noti/seen-all",
      method: "POST",
    });
    setLoading(false);
    getData();
  };
  const ListNoti = () => {
    const _data = notiData?.filter((item) => item?.type !== 3);
    return (
      <Block flex>
        {_data?.length > 0
          ? _data?.map((item, index) => {
              console.log("====item===", item);

              return (
                <Pressable
                  onPress={() => {
                    item?.type === 1
                      ? navigate("OrderScreen")
                      : navigate("NotifycationDetail", { item });
                    seen(item);
                  }}
                >
                  <Block key={index} style={styles.shadow}>
                    <Block
                      space={"between"}
                      row
                      paddingVertical={23}
                      paddingHorizontal={20}
                      backgroundColor={
                        item?.status === 0
                          ? "rgba(136, 223, 144, 0.51)"
                          : theme.colors.backgroundGreen
                      }
                    >
                      <Text
                        flex
                        marginRight={20}
                        numberOfLines={2}
                        color={item?.status === 0 ? "white" : "black"}
                        fontFamily={
                          item?.status === 0
                            ? theme.fonts.fontFamily.SourceSans3SemiBold
                            : theme.fonts.fontFamily.SourceSans3Regular
                        }
                      >
                        {item?.title}
                      </Text>
                      {item?.status === 0 && (
                        <Text color="#FF0000" size={14}>
                          Chưa đọc
                        </Text>
                      )}
                    </Block>
                  </Block>
                </Pressable>
              );
            })
          : renderEmpty()}
      </Block>
    );
  };

  const ListMess = () => {
    const _data = notiData?.filter((item) => item?.type === 3);
    return (
      <Block flex>
        {_data?.length > 0
          ? _data?.map((item, index) => {
              return (
                <Pressable
                  onPress={() => {
                    navigate("ChatScreen");
                    seen(item);
                  }}
                >
                  <Block key={index} style={styles.shadow}>
                    <Block
                      space={"between"}
                      row
                      paddingVertical={23}
                      paddingHorizontal={20}
                      backgroundColor={
                        item?.status === 0
                          ? "rgba(136, 223, 144, 0.21)"
                          : "white"
                      }
                    >
                      <Block>
                        <Text
                          flex
                          size={18}
                          marginRight={20}
                          numberOfLines={1}
                          fontFamily={
                            theme.fonts.fontFamily.SourceSans3SemiBold
                          }
                        >
                          {"Bạn có tin nhắn mới"}
                        </Text>
                        <Text
                          flex
                          marginRight={20}
                          numberOfLines={2}
                          fontFamily={
                            item?.status === 0
                              ? theme.fonts.fontFamily.SourceSans3SemiBold
                              : theme.fonts.fontFamily.SourceSans3Regular
                          }
                        >
                          {item?.body}
                        </Text>
                      </Block>
                      {item?.status === 0 && (
                        <Text color="#FF0000" size={14}>
                          Chưa đọc
                        </Text>
                      )}
                    </Block>
                  </Block>
                </Pressable>
              );
            })
          : renderEmpty()}
      </Block>
    );
  };
  const renderBody = () => {
    switch (indexTab) {
      case 0:
        return <ListNoti />;
      case 1:
        return <ListMess />;

      default:
        break;
    }
  };
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.backgroundGreen}>
      <Header rightComponent={<></>} canGoBack title={"Thông báo"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              getData();
            }}
          />
        }
        scrollEventThrottle={400}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            // getData()
          }
        }}
      >
        <TopTab onChangeTab={(id) => setindexTab(id)} indexTab={indexTab} />
        <TouchableOpacity onPress={seeAll} style={styles.seePress}>
          <Text fontType={"bold"} color="#10A31E">
            Đọc tất cả
          </Text>
        </TouchableOpacity>
        {renderBody()}
      </ScrollView>
    </Block>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "white",
  },
  seePress: {
    marginHorizontal: 20,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
});
