import { images } from "@assets";
import { Block, GradientButton, Text } from "@components";
import { goBack, navigate } from "@navigation/RootNavigation";
import { dispatch } from "@store/configStore";
import { setDataCart } from "@store/slices/cart";
import { userSelect } from "@store/slices/user";
import { theme } from "@theme";
import { formatPrice } from "@utils/helper";
import { getSize, width } from "@utils/responsive";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { DOMAIN } from "../../constants";
import { showMessage } from "react-native-flash-message";

const AddBookModal = ({ route }) => {
  const { item, index } = route.params;
  const [count, setcount] = useState(1);
  const onPress = null;
  const { userInfo } = useSelector(userSelect);

  const onBuy = async (product) => {
    dispatch(
      setDataCart({
        product: product,
        count: count,
      })
    );
    goBack();
    showMessage({
      message: "Thông báo",
      type: "success",
      description: "Đã thêm sản phẩm vào giỏ hàng",
    });
  };
  return (
    <Pressable onPress={() => goBack()} style={styles.container}>
      <Pressable>
        <Block
          paddingHorizontal={15}
          paddingVertical={17}
          radius={19}
          width={width}
          backgroundColor={theme.colors.white}
        >
          <Text
            color="#10A31E"
            size={24}
            marginBottom={17}
            center
            fontType="bold"
          >
            Sản phẩm
          </Text>

          <Block
            marginHorizontal={20}
            marginTop={30}
            paddingBottom={30}
            row
            borderColor={"#848484"}
            borderBottomWidth={0.5}
            alignCenter
          >
            <Block>
              <Image
                source={{
                  uri: item.product_image?.includes("https://")
                    ? item.product_image
                    : DOMAIN + item.product_image,
                }}
                style={styles.imgProduct}
              />
              {item?.product_status === 0 && (
                <Image source={images.ic_hetHang} style={styles.icHetHang} />
              )}
            </Block>
            <Block
              height={getSize.s(162)}
              flex
              space={"between"}
              marginLeft={18}
            >
              <Text
                numberOfLines={2}
                fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
              >
                {item?.product_name}
              </Text>

              <Block space={"between"} alignCenter row>
                <Text>Số lượng: </Text>
                <Block row alignCenter>
                  <TouchableOpacity
                    onPress={() => {
                      if (count > 1) {
                        setcount(parseInt(count) - 1);
                      }
                    }}
                    style={styles.setCountBtn}
                  >
                    <Text size={20}>-</Text>
                  </TouchableOpacity>

                  <Block style={styles.Countinput}>
                    <TextInput
                      value={count.toString()}
                      onChangeText={(txt) => setcount(txt)}
                      keyboardType="numeric"
                      style={{ padding: 0 }}
                    />
                  </Block>

                  <TouchableOpacity
                    onPress={() => setcount(parseInt(count) + 1)}
                    style={styles.setCountBtn}
                  >
                    <Text size={20}>+</Text>
                  </TouchableOpacity>
                </Block>
              </Block>

              <Block marginTop={10} row alignStart>
                <Text>
                  {parseInt(
                    item?.product_price_sale?.toString().split(".")[0]
                  ) > 0 ? (
                    <Block>
                      <Text
                        fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                      >
                        Giá:{" "}
                        {formatPrice(
                          parseInt(
                            item?.product_price_sale?.toString().split(".")[0]
                          )
                        )}{" "}
                        đồng
                      </Text>
                      <Text
                        size={12}
                        style={styles.lineTxt}
                        fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                      >
                        {formatPrice(
                          parseInt(
                            item?.product_price?.toString().split(".")[0]
                          )
                        )}{" "}
                        đồng
                      </Text>
                    </Block>
                  ) : (
                    <Text
                      fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                    >
                      {formatPrice(
                        parseInt(
                          item?.product_price?.toString().split(".")[0]
                        )
                      )}{" "}
                      đồng
                    </Text>
                  )}
                </Text>
              </Block>

              <GradientButton
                onPress={() => onBuy(item)}
                style={styles.buyBtn}
                title={"Thêm vào giỏ hàng"}
              />
            </Block>
          </Block>
        </Block>
      </Pressable>
    </Pressable>
  );
};

export default AddBookModal;

const styles = StyleSheet.create({
  imgProduct: {
    width: getSize.s(101),
    height: getSize.s(122),
  },
  buyBtn: {
    alignItems: "center",
    borderRadius: 5,
  },
  icHetHang: {
    width: getSize.s(54),
    height: getSize.s(54),
    position: "absolute",
    right: -10,
    top: -30,
  },
  setCountBtn: {
    width: getSize.s(32),
    height: getSize.s(32),
    backgroundColor: theme.colors.white,
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Countinput: {
    width: getSize.s(69),
    height: getSize.s(32),
    backgroundColor: theme.colors.white,
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 9,
  },
  container: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  lineTxt: {
    color: theme.colors.lightRed,
    textDecorationLine: "line-through",
  },
});
