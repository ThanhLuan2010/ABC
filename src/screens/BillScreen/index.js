import { images } from "@assets";
import { Block, Text } from "@components";
import { goBack, navigate } from "@navigation/RootNavigation";
import { theme } from "@theme";
import { formatPrice } from "@utils/helper";
import { width } from "@utils/responsive";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const BillScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <Block flex backgroundColor={"#0d6bc2"}>
      <Block paddingBottom={20} backgroundColor={"#0d6bc2"}>
        <Block
          marginHorizontal={20}
          paddingTop={40}
          space={"between"}
          row
          alignCenter
        >
          <TouchableOpacity
            onPress={() => navigate("EditBillScreen", { item: item })}
          >
            <Block row alignCenter>
              <Image
                source={images.share1}
                style={{ width: 20, height: 20, tintColor: "white" }}
              />
              <Text marginLeft={10} color="white">
                Chia sẻ
              </Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goBack()}>
            <Text color="white">Đóng</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          marginTop={30}
          marginHorizontal={20}
          backgroundColor={theme.colors.white}
          paddingVertical={40}
          radius={5}
          marginBottom={30}
        >
          <Block
            absolute
            width={50}
            height={50}
            radius={60}
            backgroundColor={"white"}
            alignSelf={"center"}
            alignCenter
            justifyCenter
            top={-25}
          >
            <Block
              width={30}
              height={30}
              radius={30}
              alignCenter
              justifyCenter
              backgroundColor={"#75e076"}
            >
              <Image
                style={{ width: 24, height: 24, tintColor: "white" }}
                source={images.ic_tick}
              />
            </Block>
          </Block>
          <Text
            color="#005bcc"
            size={20}
            fontFamily={theme.fonts.fontFamily.SourceSans3Bold}
            center
          >
            {formatPrice(item.amount)} VND
          </Text>
          <Text marginTop={5} color="#5b5b5b" center>
            Một trăm nghìn đồng
          </Text>

          <Block
            borderColor={"#75b698"}
            borderWidth={1}
            alignSelf={"center"}
            backgroundColor={"#d5f0dd"}
            paddingHorizontal={20}
            paddingVertical={8}
            radius={30}
            marginTop={15}
          >
            <Text size={16} center>
              Giao dịch thành công
            </Text>
          </Block>

          <Block marginTop={30} marginHorizontal={30} space={"between"} row>
            <Text color="#5b5b5b">Ngày giao dịch</Text>
            <Text>
              {item.date} {item.time}
            </Text>
          </Block>

          <Block marginTop={15} marginHorizontal={30} space={"between"} row>
            <Text color="#5b5b5b">Ngày hiệu lực</Text>
            <Text>{item.date}</Text>
          </Block>

          <Block row alignCenter marginTop={15}>
            <Block
              backgroundColor={"#0d6bc2"}
              width={30}
              height={30}
              radius={30}
              right={15}
            />
            <Block
              absolute
              backgroundColor={"#0d6bc2"}
              width={width - 40}
              height={1}
            />
            <Block
              backgroundColor={"#0d6bc2"}
              width={30}
              height={30}
              radius={30}
              right={-15}
              absolute
            />
          </Block>

          <Block marginTop={30} row alignCenter>
            <Block width={4} height={40} backgroundColor={"#06a9ec"} />
            <Text marginLeft={10} color="#06a9ec">
              Bên chuyển
            </Text>
          </Block>

          <Block marginTop={10} marginLeft={30}>
            <Text
              color="#294493"
              // size={16}
              fontFamily={theme.fonts.fontFamily.SourceSans3Bold}
            >
              {item.name}
            </Text>
            <Text color="#294493" marginTop={5}>
              ACB - NH TMCP A CHAU
            </Text>

            <Text color="#294493" marginTop={5}>
              1583991
            </Text>
          </Block>

          <Block marginTop={10} row alignCenter>
            <Block width={4} height={40} backgroundColor={"#06a9ec"} />
            <Text marginLeft={10} color="#06a9ec">
              Bên nhận
            </Text>
          </Block>

          <Block row alignCenter space={"between"} marginHorizontal={30}>
            <Text color="#5b5b5b">Tên người nhận</Text>
            <Text right flex>
              {item.recive.name}
            </Text>
          </Block>

          <Block
            marginTop={15}
            row
            // alignCenter
            space={"between"}
            marginHorizontal={30}
          >
            <Text color="#5b5b5b">Ngân hàng</Text>
            <Text right flex>
              {item.recive.bank_name}
            </Text>
          </Block>

          <Block
            marginTop={15}
            row
            alignCenter
            space={"between"}
            marginHorizontal={30}
          >
            <Text color="#5b5b5b">Số tài khoản</Text>
            <Text right flex>
              {item.recive.stk}
            </Text>
          </Block>

          {/* <Block width={width - 40} row alignCenter marginVertical={20}>
          {[...Array(100).keys()].map((item, index) => {
            return (
              <Block>
                <Text marginRight={5}>_</Text>
              </Block>
            );
          })}
        </Block> */}
          <Block marginTop={20}>
            <Block
              borderWidth={1}
              style={styles.border}
              borderColor={"#285e8a"}
            />
            <Block backgroundColor={"white"} height={2} bottom={1} />
          </Block>

          <Block marginTop={10} row alignCenter>
            <Block width={4} height={40} backgroundColor={"#06a9ec"} />
            <Text marginLeft={10} color="#06a9ec">
              Thông tin giao dịch
            </Text>
          </Block>

          <Block
            marginTop={15}
            row
            alignCenter
            space={"between"}
            marginHorizontal={30}
          >
            <Text color="#5b5b5b">Phí</Text>
            <Text right flex>
              Miễn phí
            </Text>
          </Block>

          <Block marginTop={15} row space={"between"} marginHorizontal={30}>
            <Text color="#5b5b5b">Nội dung</Text>
            <Text
              flex
              marginLeft={5}
              fontFamily={theme.fonts.fontFamily.SourceSans3Medium}
              right
              color="#19376b"
            >
              {item.description}
            </Text>
          </Block>

          <Block
            marginTop={15}
            row
            alignCenter
            space={"between"}
            marginHorizontal={30}
          >
            <Text color="#5b5b5b">Số giao dịch</Text>
            <Text right flex>
              {item.transaction_code}
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default BillScreen;

const styles = StyleSheet.create({
  border: {
    borderStyle: "dashed",
  },
});
