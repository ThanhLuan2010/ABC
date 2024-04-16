import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Block, Text } from "@components";
import { theme } from "@theme";

const data = [
  { id: 0, title: "Đã thực hiện" },
  { id: 1, title: "Chờ xử lý" },
  { id: 2, title: "Đặt lịch" },
];
const TopTab = ({ indexTab, onChangeTab }) => {
  return (
    <Block
      justifyCenter
      row
      marginVertical={20}
    >
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() => onChangeTab(index)}
          style={[
            styles.press,
            {
              borderBottomWidth: indexTab === index ? 2.5 : 0,
            },
          ]}
          key={index}
        >
          <Text
            // size={18}
            color={indexTab === index ? "#086ce6" : "#747474"}
            numberOfLines={1}
            fontFamily={
              indexTab === index
                ? theme.fonts.fontFamily.SourceSans3Bold
                : theme.fonts.fontFamily.SourceSans3Regular
            }
            style={styles.txt}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </Block>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  press: {
    // marginHorizontal: 10,
    alignItems: "center",
    borderColor: "#086ce6",
    flex:1,
    paddingBottom:5
  },
  txt: {},
});
