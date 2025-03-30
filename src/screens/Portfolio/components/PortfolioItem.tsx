import React from "react";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import { View } from "react-native";
import { PortfolioInstrumentTO } from "src/api/models/Portfolio/Portfolio";

const PortfolioItem = ({ ...item }: PortfolioInstrumentTO) => {
  const marketValue = item.last_price * item.quantity;
  const totalProfit = (item.last_price - item.avg_cost_price) * item.quantity;
  const totalReturn =
    ((item.last_price - item.avg_cost_price) / item.avg_cost_price) * 100;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
      }}
    >
      <View style={{ flex: 1}}>
        <AppText bold type="p2" color={AppColors.white}>
          {item.ticker}
        </AppText>
        <AppText type="p3" color={AppColors.mediumGray}>
          {item.quantity}
        </AppText>
      </View>
      <View style={{ flex:1, alignItems: "center"}}>
        <AppText bold align="left" type="p3" color={AppColors.mediumGray}>
          {marketValue.toFixed(2)}
        </AppText>
      </View>
      <View  style={{ flex: 1}}>
        <AppText
          align="right"
          type="p2"
          color={totalProfit >= 0 ? AppColors.success : AppColors.error}
        >
          {`${totalProfit.toFixed(2)} $`}
        </AppText>
        <AppText
          bold
          align="right"
          type="p3"
          color={totalReturn >= 0 ? AppColors.success : AppColors.error}
        >
          {`${totalReturn.toFixed(2)} %`}
        </AppText>
      </View>
    </View>
  );
};

export default PortfolioItem;
