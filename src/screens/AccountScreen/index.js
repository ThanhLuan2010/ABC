import { images } from "@assets";
import { Block, Text } from "@components";
import { goBack, navigate } from "@navigation/RootNavigation";
import { theme } from "@theme";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const AccountScreen = () => {
  return (
    <Block flex>
      <Block
        paddingBottom={20}
        paddingHorizontal={20}
        backgroundColor={theme.colors.white}
      >
        <Block paddingTop={30} space={"between"} row alignCenter>
          <TouchableOpacity onPress={()=>goBack()}>
            <Image source={images.ic_back} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Text size={18}>Tài khoản thanh toán</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#edf5ff",
              width: 30,
              height: 30,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.ic_switch}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </Block>

        <Block marginTop={20} space={"between"} row alignCenter>
          <Block>
            <Text>Tổng số dư</Text>
            <Text
              marginTop={3}
              color="#2b353f"
              size={20}
              fontFamily={theme.fonts.fontFamily.SourceSans3Bold}
            >
              100.000 <Text>VND</Text>{" "}
            </Text>
          </Block>

          <TouchableOpacity onPress={()=>navigate('HistoryScreen')}>
            <Block
              paddingHorizontal={15}
              paddingVertical={10}
              radius={30}
              alignCenter
              backgroundColor={"#2e72ff"}
              row
            >
              <Text
                fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                color="white"
                marginRight={5}
              >
                Lịch sử
              </Text>
              <Image
                source={images.ic_clock}
                style={{ width: 20, height: 20, resizeMode: "contain" }}
              />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>

      <Block
        marginTop={20}
        marginHorizontal={20}
        backgroundColor={"white"}
        paddingBottom={20}
        radius={10}
        style={styles.shadow}
      >
        <Text marginHorizontal={20} marginTop={20}>
          TKTT FIRST KHTN (CN) VND
        </Text>
        <Block
          backgroundColor={"#3d92ff"}
          paddingHorizontal={20}
          paddingVertical={10}
          row
          space={"between"}
          alignCenter
          marginTop={20}
        >
          <Text
            fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
            color="white"
          >
            15839911
          </Text>
          <Block row alignCenter>
            <Image
              source={images.share}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                tintColor: "white",
              }}
            />
            <Text
              fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
              color="white"
              marginLeft={5}
            >
              Chia sẻ
            </Text>
          </Block>
        </Block>

        <Block
          marginHorizontal={20}
          marginTop={15}
          row
          alignCenter
          space={"between"}
        >
          <Text>Số dư khả dụng</Text>
          <Text size={20} fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
            100.000 <Text size={16}>VND</Text>
          </Text>
        </Block>
        <Block
          marginHorizontal={20}
          marginTop={0}
          row
          alignCenter
          space={"between"}
        >
          <Text>Số dư thực</Text>
          <Text>
            100.000 <Text>VND</Text>
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  shadow:{
    elevation:10,
  }
})