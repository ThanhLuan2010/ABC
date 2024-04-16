import { images } from "@assets";
import { Text } from "@components";
import Block from "@components/Block";
import { navigate } from "@navigation/RootNavigation";
import { cartSelect } from "@store/slices/cart";
import { chatkSelect } from "@store/slices/chat";
import { notiSelect } from "@store/slices/notification";
import { theme } from "@theme";
import { getSize } from "@utils/responsive";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const TopNav = ({ isHome }) => {
  const { isNewMessage } = useSelector(chatkSelect);
  const { isNewNoti } = useSelector(notiSelect);
  const { dataCart } = useSelector(cartSelect);
  return (
    <Block
      paddingHorizontal={20}
      paddingVertical={20}
      alignCenter
      space={"between"}
      row
      marginTop={10}
    >
      <TouchableOpacity onPress={() => navigate("ChatScreen")}>
        <Image
          source={images.ic_chat}
          style={[styles.icQuize, { tintColor: isHome && "white" }]}
        />
        {isNewMessage && (
          <Block
            backgroundColor={"red"}
            width={getSize.s(10)}
            height={getSize.s(10)}
            radius={getSize.s(10)}
            absolute
            bottom={0}
            right={0}
          />
        )}
      </TouchableOpacity>
      <Block alignCenter space={"between"} row>
        <TouchableOpacity
          onPress={() => navigate("NotificationScreen")}
          style={{ marginRight: 40 }}
        >
          <Image
            source={images.ic_bell}
            style={[styles.icQuize, { tintColor: isHome && "white" }]}
          />
          {isNewNoti && (
            <Block
              backgroundColor={"red"}
              width={getSize.s(10)}
              height={getSize.s(10)}
              radius={getSize.s(10)}
              absolute
              bottom={5}
              right={-3}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("Cart")}
          style={{
            marginRight: 40,
          }}
        >
          <Image
            source={images.ic_cart}
            style={[
              styles.icQuize,
              { tintColor: isHome ? "white" : "#10A31E" },
            ]}
          />
          {dataCart?.length > 0 && (
            <Block
              backgroundColor={"red"}
              width={getSize.s(20)}
              height={getSize.s(20)}
              radius={getSize.s(20)}
              absolute
              bottom={-5}
              right={-10}
              justifyCenter
              alignCenter
            >
              <Text
                fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                size={10}
                color="white"
                numberOfLines={1}
              >
                {dataCart?.length || 0}
              </Text>
            </Block>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("AccountScreen")}>
          <Image
            source={images.ic_account}
            style={[styles.icUser, { tintColor: isHome && "white" }]}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  icQuize: {
    width: 26,
    height: 31,
    resizeMode: "contain",
  },
  icUser: {
    width: getSize.m(38),
    height: getSize.m(38),
  },
});
