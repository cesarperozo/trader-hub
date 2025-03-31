import React, { useEffect, useMemo, useState } from "react";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import AppSafeContainer from "commons/components/AppSafeContainer/AppSafeContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  TradingFlowNavigationProps,
  TradingFlowNavigatorParams,
} from "commons/navigation/navigators/TradingFlowNavigator";
import { RouteProp } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import AppButton from "commons/components/AppButton/AppButton";
import { appResponsiveSize } from "commons/utils/ScreenUtils";
import { calculateReturn } from "../components/utils";
import AppDivider from "commons/components/AppDivider/AppDivider";
import { styles } from "./InstrumentDetailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useBottomSheetStore } from "src/api/stores/useBottomSheetStore";
import { useOrdersStore } from "src/api/stores/useOrderStore";
import shallow, { useShallow } from "zustand/shallow";
import InstrumentDetailHeader from "./components/InstrumentDetailHeader/InstrumentDetailHeader";
import InstrumentCard from "./components/instrumentDetailsCard/InstrumentCard";
import PortfolioItem from "src/screens/Portfolio/components/PortfolioItem";
import OrderItem from "./components/OrderItem/OrderItem";

type SideType = "SELL" | "BUY" | null;

const InstrumentDetailsScreen = () => {
  const { setOpenBottomSheet } = useBottomSheetStore();


  const { params } =
    useRoute<RouteProp<TradingFlowNavigatorParams, "InstrumentDetails">>();
  const intrument = params.instrument;

  const orders = useOrdersStore(
    useShallow((state) => state.getOrders(intrument.id.toString()))
  );


  const handleSellOrBuy = (side: SideType) => {
    const createOrder = {
      side,
      instrument_id: intrument.id,
    };
    setOpenBottomSheet("DEFAULT", { args: createOrder! });
  };

  return (
    <AppSafeContainer safeBottom={false}>
      <InstrumentDetailHeader />
      <InstrumentCard  instrument={intrument} handleSellOrBuy={handleSellOrBuy}/>
    
      <View
        style={{
          height: 1,
          backgroundColor: AppColors.darkGray,
          marginVertical: appResponsiveSize(18),
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <AppText bold type="p3" color={AppColors.mediumGray}>
            Order ID
          </AppText>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <AppText bold align="left" type="p3" color={AppColors.mediumGray}>
            Type
          </AppText>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <AppText bold type="p3" color={AppColors.mediumGray}>
            Status
          </AppText>
        </View>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => String(item.instrument_id)}
        renderItem={({ item }) => <OrderItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </AppSafeContainer>
  );
};

export default InstrumentDetailsScreen;
