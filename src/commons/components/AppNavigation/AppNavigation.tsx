import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { DefaultTheme } from "@react-navigation/native";
import { AppColors } from "commons/utils/AppColors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AppBottomSheet from "../AppBottomSheet/AppBottomSheet";
import TradingFlowNavigator from "commons/navigation/navigators/TradingFlowNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.black,
  },
};

const AppNavigation = () => {
  return (
  
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <TradingFlowNavigator />
          <AppBottomSheet />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
