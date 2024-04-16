import { Block, Header, Text } from "@components";
import { theme } from "@theme";
import { getSize } from "@utils/responsive";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import RenderHTML from "react-native-render-html";
import { useDispatch } from "react-redux";

const NotifycationDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { item } = route.params;

  return (
    <Block flex backgroundColor={theme.colors.backgroundGreen}>
      <Header canGoBack title={"Thông báo"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block paddingVertical={30} paddingHorizontal={20}>
          <Text size={20} fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
            {item?.title}
          </Text>
          <RenderHTML source={{ html: item?.body }} />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default NotifycationDetail;

const styles = StyleSheet.create({
  newsImg: {
    marginHorizontal: 20,
    height: getSize.v(240),
    borderRadius: 10,
    resizeMode: "cover",
    marginTop: 23,
  },
  input: {
    fontSize: getSize.s(14),
    fontFamily: theme.fonts.fontFamily.SourceSans3LightItalic,
    flex: 1,
  },
  icSend: {
    width: 17,
    height: 15,
  },
  avatarCmt: {
    width: getSize.s(45),
    height: getSize.s(45),
    borderRadius: getSize.s(45 / 2),
  },
});
