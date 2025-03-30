import { NavigatorScreenParams } from "@react-navigation/native";
import React from "react";
import HomeNavigator, { HomeStackParamList } from "./HomeNavigator";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { InstrumentTO } from "src/api/models/Instrument/Instrument";
import InstrumentDetailsScreen from "src/screens/Instruments/InstrumentDetails/InstrumentDetailsScreen";

export type TradingFlowNavigationProps =
  StackNavigationProp<TradingFlowNavigatorParams>;

export type TradingFlowNavigatorParams = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  InstrumentDetails: {instrument:  InstrumentTO},
};

export const TradingFlow = createStackNavigator<TradingFlowNavigatorParams>();

export const TradingFlowNavigator = () => {
  return (
    <TradingFlow.Navigator initialRouteName="HomeStack"  screenOptions={{ headerShown: false }}>
      <TradingFlow.Screen name="HomeStack" component={HomeNavigator} />
      <TradingFlow.Screen name="InstrumentDetails" component={InstrumentDetailsScreen} />
    </TradingFlow.Navigator>
  );
};

export default TradingFlowNavigator;
