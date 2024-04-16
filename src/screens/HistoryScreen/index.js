import { images } from "@assets";
import { Block, Text } from "@components";
import { theme } from "@theme";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import TopTab from "./TopTab";
import { useSelector } from "react-redux";
import { historySelect } from "@store/slices/history";
import { useEffect } from "react";
import { formatPrice } from "@utils/helper";
import { goBack, navigate } from "@navigation/RootNavigation";

const NotificationScreen = () => {
  const [indexTab, setindexTab] = useState(0);
  const { dataHistory } = useSelector(historySelect);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const groupedByDate = dataHistory.reduce((acc, item) => {
      // Tìm kiếm xem đã có phần tử nào với ngày này trong accumulator chưa
      const group = acc.find((g) => g.date === item.date);
      if (group) {
        // Nếu có, chỉ cần thêm item vào mảng data của nhóm này
        group.data.push(item);
      } else {
        // Nếu không, tạo một nhóm mới với ngày và dữ liệu này
        acc.push({ date: item.date, data: [item] });
      }
      return acc;
    }, []);
    setdata(groupedByDate);
  }, []);

  const renderHistory = (item, index) => {
    return (
      <Block marginTop={10} marginHorizontal={20}>
        <Text
          marginBottom={7}
          fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
          color="#63666F"
        >
          {item.date}
        </Text>
        <Block backgroundColor={theme.colors.white}>
          {item.data.map((subItem, subIndex) => (
            <Block
              paddingVertical={15}
              borderTopWidth={subIndex === 0 ? 0 : 1}
              borderColor={"#ededef"}
            >
              <Pressable
                onPress={() => navigate("BillScreen", { item: subItem })}
              >
                <Block row alignCenter space={"between"}>
                  <Block row alignCenter>
                    <Block
                      backgroundColor={
                        subItem.type === "DOWN" ? "#f6f7fc" : "#f0fffb"
                      }
                    >
                      <Image
                        source={
                          subItem.type === "DOWN"
                            ? images.arrow_down
                            : images.arrow_up
                        }
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: "center",
                          tintColor:
                            subItem.type === "DOWN" ? "#959ca2" : "#258b66",
                        }}
                      />
                    </Block>
                    <Text marginLeft={5}>{subItem.time}</Text>
                  </Block>
                  <Text
                    fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                    color={subItem.type === "DOWN" ? "black" : "#258b66"}
                    size={16}
                  >
                    {subItem.type === "UP" ? "+" : "-"}{" "}
                    {formatPrice(subItem.amount)} VND
                  </Text>
                </Block>
                <Text
                  marginTop={10}
                  fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                >
                  {subItem.name}
                </Text>
                <Block row space={"between"} alignEnd>
                  <Text style={{ flex: 2 }} marginTop={10}>
                    {subItem.description}
                  </Text>

                  <Block flex alignEnd>
                    {subItem.type === "DOWN" && (
                      <Image
                        source={images.dots}
                        style={{ tintColor: "#959da8", width: 24, height: 24 }}
                      />
                    )}
                  </Block>
                </Block>
              </Pressable>
            </Block>
          ))}
        </Block>
      </Block>
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Block backgroundColor={"white"}>
        <Block
          marginHorizontal={20}
          paddingTop={30}
          space={"between"}
          row
          alignCenter
        >
          <TouchableOpacity onPress={()=>goBack()}>
            <Image source={images.ic_back} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Text size={18}>Lịch sử giao dịch</Text>
          <TouchableOpacity>
            <Image
              source={images.ic_filter}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </Block>

        <Block
          paddingHorizontal={15}
          paddingVertical={10}
          radius={30}
          alignCenter
          backgroundColor={"#2e72ff"}
          row
          alignSelf={"center"}
          marginTop={30}
        >
          <Text
            fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
            color="white"
            marginRight={5}
          >
            15839911
          </Text>
          <Image
            source={images.ic_down}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              tintColor: "white",
            }}
          />
        </Block>

        <TopTab
          indexTab={indexTab}
          onChangeTab={(index) => setindexTab(index)}
        />

        <Text marginBottom={10} center>
          30 ngày gần nhất
        </Text>
      </Block>

      {data.length > 0 && data.map(renderHistory)}
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
