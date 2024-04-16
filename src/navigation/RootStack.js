import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import AlertModal from "../modal/AlertModal";
import BuyProducts from "../modal/BuyProducts";
import CodePushUpdate from "../modal/CodePushUpdate";
import DeliveryFail from "../modal/DeliveryFail";
import OrderModal from "../modal/OrderModal";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BottomTab from "./BottomTabNavigation";
import { navigationRef } from "./RootNavigation";
import { APP_PREFIX, PATH_SCREENS, routes } from "./routes";
import AccountScreen from "@screens/AccountScreen";
import HistoryScreen from '@screens/HistoryScreen'
import BillScreen from '@screens/BillScreen'
import EditBillScreen from "@screens/EditBillScreen";
const Stack = createStackNavigator();

export default function MainContainer() {
  const linking = {
    prefixes: APP_PREFIX,
    config: PATH_SCREENS,
  };
  // const { isLoggedIn } = useSelector(userSelect);
  // const { isLoggedIn } = useSelector(userSelect);
  const isLoggedIn = true;
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          {isLoggedIn ? (
            <>
              <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTab} />
              <Stack.Screen name={'AccountScreen'} component={AccountScreen} />
              <Stack.Screen name={'HistoryScreen'} component={HistoryScreen} />
              <Stack.Screen name={'BillScreen'} component={BillScreen} />
              <Stack.Screen name={'EditBillScreen'} component={EditBillScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
              <Stack.Screen
                name={"RegisterScreen"}
                component={RegisterScreen}
              />
             
            </>
          )}
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: "transparentModal",
            headerShown: false,
          }}
        >
          <Stack.Screen name={"AlertModal"} component={AlertModal} />
          <Stack.Screen name={"OrderModal"} component={OrderModal} />
          <Stack.Screen name={"BuyProducts"} component={BuyProducts} />
          <Stack.Screen name={"DeliveryFail"} component={DeliveryFail} />
          <Stack.Screen name={"CodePushUpdate"} component={CodePushUpdate} />
          <Stack.Screen name={"LoadingScreen"} component={LoadingScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
