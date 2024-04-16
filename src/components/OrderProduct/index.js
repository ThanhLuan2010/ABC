import { Block, GradientButton, Text } from "@components";
import { navigate } from "@navigation/RootNavigation";
import { theme } from "@theme";
import { formatPrice } from "@utils/helper";
import React from "react";
import { Image } from "react-native";
import { DOMAIN } from "../../constants";
import styles from "./styles";
const OrderProduct = ({ item }) => {
  const renderStatus = () => {
    switch (item?.order_status) {
      case 0:
        return "Chờ xác nhận";
      case 1:
        return "Chờ lấy hàng";
      case 2:
        return "Đơn hàng đang giao";
      case 3:
        return "Đơn hàng đã được giao thành công";
      case -1:
        return "Đơn hàng đã được yêu cầu huỷ bởi bạn";
      case -2:
        return (
          "Đơn hàng giao không thành công\nLý do: " +
            item?.order_cancel_reason || "-"
        );
      case -3:
        return "Đơn hàng đã được xác nhận huỷ";
      default:
        break;
    }
  };

  const renderButtonTitle = () => {
    switch (item?.order_status) {
      case 0:
        return "Chi tiết đơn hàng";
      case 1:
        return "Chi tiết đơn hàng";
      case 2:
        return "Chi tiết đơn hàng";
      case 3:
        return "Đánh giá";
      case -1:
        return "Chi tiết đơn huỷ";
      case -3:
        return "Chi tiết đơn huỷ";
      case -2:
        return "Mua lại";
      default:
        break;
    }
  };

  const onPressAction = () => {
    // if(item?.order_status === -1){
    //   () => {
    //     navigate("CancelDetail", { item });
    //   };
    // }
    switch (item?.order_status) {
      case 0:
        navigate("DetailOrders", { item });
        break;
      case 1:
        navigate("DetailOrders", { item });
        break;
      case 2:
        navigate("DetailOrders", { item });
        break;
      case 3:
        navigate("VoteOrderDetail", { item });
        break;
      case -1:
        navigate("CancelDetail", { item });
        break;
      case -3:
        navigate("CancelDetail", { item });
        break;
      case -2:
        navigate("ProductDetail", { item: item?.cart_item[0] });
        break;
      default:
    }
  };

  const renderListProducts = (item, index) => {
    return (
      <Block
        key={index}
        row
        borderColor={theme.colors.gray_3}
        paddingTop={10}
        borderTopWidth={index === 0 ? 0 : 1}
        marginTop={index === 0 ? 0 : 10}
      >
        <Block>
          <Image
            style={styles.imgProduct}
            source={{
              uri: item?.product_image?.includes("https://")
                ? item?.product_image
                : DOMAIN + item?.product_image,
            }}
          />
        </Block>
        <Block paddingVertical={10} space={"between"} flex>
          <Text
            size={16}
            fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
            numberOfLines={2}
          >
            {item?.product_name}
          </Text>

          <Text size={16}>
            Số lượng mua:{" "}
            <Text
              size={16}
              fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
            >
              x{item?.cart_item_quantity}
            </Text>
          </Text>
          <Text
            color="#10A31E"
            right
            size={16}
            fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
          >
            {formatPrice(
              parseInt(item?.cart_item_amount?.toString()?.split(".")[0])
            )}{" "}
            Đồng
          </Text>
          {/* {parseInt(item?.cart_item_price_sale?.toString()?.split(".")[0]) >
            0 && (
            <Text
              style={styles.textLine}
              size={12}
              right
              color={theme.colors.darkRed}
            >
              {formatPrice(
                parseInt(
                  (item?.cart_item_price * item?.cart_item_quantity)
                    ?.toString()
                    ?.split(".")[0]
                )
              )}{" "}
              Đồng
            </Text>
          )} */}
        </Block>
      </Block>
    );
  };
  const isHavePhanBon =
    item?.cart_item.some((product) => product?.product_bag) === 1;
  return (
    // <TouchableOpacity
    //   onPress={() => navigate("DetailOrders", { item })}
    //   style={styles.container}
    // >
    <Block style={styles.container}>
      <Block backgroundColor={theme.colors.greenBlur} paddingHorizontal={20}>
        <Block>{item?.cart_item?.map(renderListProducts)}</Block>
        <Block
          row
          space={"between"}
          alignCenter
          // borderTopWidth={0.5}
          borderBottomWidth={0.5}
          paddingVertical={8}
          borderColor={theme.colors.gray_3}
        >
          <Text color="#747474" size={14}>
            {item?.cart_item?.length || 1} sản phẩm
          </Text>
          <Block alignEnd>
            {parseInt(item?.order_discount?.toString()?.split(".")[0]) > 0 && (
              <Text size={14}>
                Khuyến mãi:{" "}
                <Text
                  fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                  size={14}
                  color="#10A31E"
                >
                  {formatPrice(
                    parseInt(item?.order_discount?.toString()?.split(".")[0])
                  )}{" "}
                  Đồng
                </Text>
              </Text>
            )}

            {!isHavePhanBon && (
              <Text size={12}>
                Phí phát sinh:{" "}
                <Text
                  fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                  size={14}
                  color="#10A31E"
                >
                  {formatPrice(
                    parseInt(item?.order_fee_ship?.toString()?.split(".")[0])
                  )}{" "}
                  Đồng
                </Text>
              </Text>
            )}

            <Text size={18}>
              Thành tiền:{" "}
              <Text
                fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                size={18}
                color={theme.colors.darkRed}
              >
                {formatPrice(
                  parseInt(item?.order_total?.toString()?.split(".")[0])
                )}{" "}
                Đồng
              </Text>
            </Text>
          </Block>
        </Block>
        <Block row alignCenter={"center"} space={"between"} paddingVertical={8}>
          <Text flex marginRight={20} size={14} color="#747474">
            {renderStatus()}
          </Text>
          <GradientButton
            onPress={
              item?.order_comment === 0
                ? onPressAction
                : () => navigate("ProductDetail", { item: item?.cart_item[0] })
            }
            title={item?.order_comment === 0 ? renderButtonTitle() : "Mua lại"}
            style={styles.GradientButton}
            styleTitle={styles.styleTitle}
          />
        </Block>
      </Block>
    </Block>

    // </TouchableOpacity>
  );
};

export default OrderProduct;
