import React, { useState } from "react";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import AppSafeContainer from "commons/components/AppSafeContainer/AppSafeContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  TradingFlowNavigationProps,
  TradingFlowNavigatorParams,
} from "commons/navigation/navigators/TradingFlowNavigator";
import { RouteProp } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import AppButton from "commons/components/AppButton/AppButton";
import { appResponsiveSize } from "commons/utils/ScreenUtils";
import { calculateReturn } from "../components/utils";
import AppDivider from "commons/components/AppDivider/AppDivider";
import { styles } from "./InstrumentDetailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useBottomSheetStore } from "src/api/stores/useBottomSheetStore";

type SideType = "SELL" | "BUY" | null;

const InstrumentDetailsScreen = () => {
  const { setOpenBottomSheet } = useBottomSheetStore();

  const navigation = useNavigation<TradingFlowNavigationProps>();
  const { params } =
    useRoute<RouteProp<TradingFlowNavigatorParams, "InstrumentDetails">>();
  const intrument = params.instrument;



  const handleSellOrBuy = (side: SideType) => {
    const createOrder = {
      side,
      instrument_id: intrument.id
    }
    setOpenBottomSheet("DEFAULT", { args: createOrder! });
  };

  return (
    <AppSafeContainer safeBottom={false}>
      <View style={styles.titleHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons color={AppColors.white} name="arrow-back" size={28} />
        </TouchableOpacity>
        <AppText type="h2">Instrument Details</AppText>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <AppText bold color={AppColors.mediumGray} type="p3">
            Name
          </AppText>
          <AppText bold color={AppColors.mediumGray} type="p3">
            Price
          </AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View>
            <AppText bold type="h3">
              {intrument.name}
            </AppText>
            <AppText bold color={AppColors.mediumGray} type="p2">
              {intrument.ticker}
            </AppText>
          </View>
          <View>
            <AppText align="right" bold type="h3">
              {`${intrument.last_price} $`}
            </AppText>
            <AppText align="right" bold color={AppColors.mediumGray} type="p2">
              {calculateReturn(intrument.last_price, intrument.close_price)}
            </AppText>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <AppButton
            buttonColor={AppColors.buyButtonBackground}
            buttonHeight={appResponsiveSize(32, "height")}
            buttonStyle={{ flex: 1 }}
            text="Buy"
            colorText={AppColors.success}
            onPress={() => handleSellOrBuy("BUY")}
          />
          <AppButton
            buttonColor={AppColors.sellButtonBackground}
            buttonHeight={appResponsiveSize(32, "height")}
            buttonStyle={{ flex: 1 }}
            text="Sell"
            colorText={AppColors.error}
            onPress={() => handleSellOrBuy("SELL")}
          />
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: AppColors.darkGray,
          marginVertical: appResponsiveSize(18),
        }}
      />
    </AppSafeContainer>
  );
};

export default InstrumentDetailsScreen;
