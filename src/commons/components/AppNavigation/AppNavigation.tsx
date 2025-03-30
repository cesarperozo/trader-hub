import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { DefaultTheme } from "@react-navigation/native";
import TradingFlowNavigator from "commons/navigation/navigators/TradingFlowNavigator";
import { AppColors } from "commons/utils/AppColors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.white,
  },
};

const AppNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <TradingFlowNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
