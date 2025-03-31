import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AppTabBar from "commons/components/AppTabBar/AppTabBar";
import React from "react";
import { Text, View } from "react-native";
import InstrumentsScreen from "src/screens/Instruments/IntrumentsScreen";
import PortfolioScreen from "src/screens/Portfolio/PortfolioScreen";
import { Ionicons } from "@expo/vector-icons";


export type HomeStackParamList = {
  Intruments: undefined;
  Portfolio: undefined;
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    
    <Tab.Navigator
      tabBar={(props) => <AppTabBar {...props} />}
      initialRouteName="Portfolio"
    >
         <Tab.Screen name="Intruments" component={InstrumentsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
            name="stats-chart-outline"
            size={size}
            color={color}
          />
          ),
          tabBarLabel: "Intruments",
          header: () => null,
        }}  />
      <Tab.Screen name="Portfolio" component={PortfolioScreen}   options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
            name="wallet-outline"
            size={size}
            color={color}
          />
          ),
          tabBarLabel: "Portfolio",
          header: () => null,
        }} />
   
    </Tab.Navigator>
  );
};

export default HomeNavigator;
