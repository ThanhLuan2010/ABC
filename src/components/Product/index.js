import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Block from "@components/Block";
import { getSize } from "@utils/responsive";
import { GradientButton, Text } from "@components";
import { theme } from "@theme";
import { images } from "@assets";
import { formatPrice } from "@utils/helper";
import { navigate } from "@navigation/RootNavigation";
import { DOMAIN } from "../../constants";

const Product = ({ item, index, onPress = null }) => {
  return (
    <Block
      marginHorizontal={20}
      marginTop={index === 0 ? 0 : 15}
      paddingTop={15}
      borderTopWidth={index === 0 ? 0 : 0.6}
      row
      borderColor={"#848484"}
      alignCenter
    >
      <TouchableOpacity
        onPress={
          onPress ? onPress : () => navigate("ProductDetail", { item, index })
        }
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Block>
          <Image
            source={{
              uri: item?.product_image?.includes("https://")
                ? item?.product_image
                : DOMAIN + item?.product_image,
            }}
            style={styles.imgProduct}
          />
          {item?.product_status === 0 && (
            <Image source={images.ic_hetHang} style={styles.icHetHang} />
          )}
        </Block>
        <Block height={getSize.s(152)} flex space={"between"} marginLeft={18}>
          <Text
            numberOfLines={1}
            fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
          >
            {item?.product_name}
          </Text>
          <Text
            numberOfLines={1}
            fontFamily={theme.fonts.fontFamily.SourceSans3Regular}
          >
            Mô tả: {item?.product_short_description}
          </Text>
          <Block row>
            <Text>Giá: </Text>
            <Block>
              {parseInt(item?.product_price_sale?.toString().split(".")[0]) >
              0 ? (
                <Block>
                  <Text fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}>
                    {formatPrice(
                      parseInt(
                        item?.product_bag === 1
                          ? item?.product_price_sale
                          : item?.product_price_sale_default
                              ?.toString()
                              .split(".")[0]
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
                      parseInt(item?.product_price?.toString().split(".")[0])
                    )}{" "}
                    đồng
                  </Text>
                </Block>
              ) : (
                <Text fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}>
                  {formatPrice(
                    parseInt(
                      item?.product_bag === 1
                        ? item?.product_price
                        : item?.product_price_default?.toString().split(".")[0]
                    )
                  )}{" "}
                  đồng
                </Text>
              )}
            </Block>
          </Block>

          <GradientButton
            onPress={() => navigate("BuyProducts", { item, index })}
            style={styles.buyBtn}
            title={"Thêm vào giỏ"}
          />
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

export default Product;

const styles = StyleSheet.create({
  imgProduct: {
    width: getSize.s(109),
    height: getSize.s(142),
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
  lineTxt: {
    color: theme.colors.lightRed,
    textDecorationLine: "line-through",
  },
});
