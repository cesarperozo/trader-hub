import React from "react";
import { View, StyleSheet } from "react-native";
import { calculateReturn } from "src/screens/Instruments/components/utils";
import { AppColors } from "commons/utils/AppColors";
import AppText from "commons/components/AppText/AppText";
import AppButton from "commons/components/AppButton/AppButton";
import { appResponsiveSize } from "commons/utils/ScreenUtils";

interface InstrumentCardProps {
  instrument: {
    name: string;
    ticker: string;
    last_price: number;
    close_price: number;
  };
  handleSellOrBuy: (action: "BUY" | "SELL") => void;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({
  instrument,
  handleSellOrBuy,
}) => {
  return (
    <View>
      <View style={styles.header}>
        <AppText bold color={AppColors.mediumGray} type="p3">
          Name
        </AppText>
        <AppText bold color={AppColors.mediumGray} type="p3">
          Price
        </AppText>
      </View>
      <View style={styles.details}>
        <View>
          <AppText bold type="h3">
            {instrument.name}
          </AppText>
          <AppText bold color={AppColors.mediumGray} type="p2">
            {instrument.ticker}
          </AppText>
        </View>
        <View>
          <AppText align="right" bold type="h3">
            {`${instrument.last_price} $`}
          </AppText>
          <AppText align="right" bold color={AppColors.mediumGray} type="p2">
            {calculateReturn(instrument.last_price, instrument.close_price)}
          </AppText>
        </View>
      </View>
      <View style={styles.actions}>
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
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    gap: 16,
  },
});

export default InstrumentCard;
