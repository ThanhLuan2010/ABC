import React from "react";
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { images } from "@assets";
import { getSize } from "@utils/responsive";
import { theme } from "@theme";
import { Text } from "@components";
import HomeView from "@screens/Bottom/HomeScreen";

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title0":
        icon = images.ic_tabHome;
        break;
      case "title1":
        icon = images.ic_tab_QR;
        break;
      case "title2":
        icon = images.ic_thanhtoan;
        break;
      case "title3":
        icon = images.ic_more;
        break;
    }

    return <Image source={icon} style={[styles.icTab]} />;
  };

  const _renderLable = (routeName, selectedTab) => {
    let lable = "";

    switch (routeName) {
      case "title0":
        lable = "Trang chủ";
        break;
      case "title1":
        lable = "QR Code";
        break;
      case "title2":
        lable = "Thanh toán";
        break;
      case "title3":
        lable = "Thêm";
        break;
    }

    return (
      <Text
        marginTop={2}
        color={routeName === selectedTab ? "#147EF4" : "gray"}
      >
        {lable}
      </Text>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
        {_renderLable(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      screenOptions={{ headerShown: false }}
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={70}
      circleWidth={60}
      bgColor="white"
      initialRouteName="title0"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Click Action")}
          >
            <Image source={images.ic_chuyentien} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        options={{}}
        name="title0"
        position="LEFT"
        component={() => <HomeView />}
      />
      <CurvedBottomBar.Screen
        name="title1"
        position="LEFT"
        component={() => <Screen1 />}
      />
      <CurvedBottomBar.Screen
        name="title2"
        component={() => <Screen2 />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="title3"
        component={() => <Screen2 />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    bottom: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
  icTab: {
    width: getSize.s(24),
    height: getSize.s(24),
  },
});
