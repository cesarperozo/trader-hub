import React from "react";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import { View } from "react-native";
import { InstrumentTO } from "src/api/models/Instrument/Instrument";
import { calculateReturn } from "./utils";

const InstrumentItem = ({ ...item }: InstrumentTO) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
      }}
    >
      <View>
        <AppText bold type="p2" color={AppColors.white}>
          {item.name}
        </AppText>
        <AppText type="p3" color={AppColors.mediumGray}>
          {item.ticker}
        </AppText>
      </View>
      <View>
      <AppText align="right" type="p2" color={AppColors.white}>
          {`${item.last_price} $`}
        </AppText>
        <AppText bold align="right" type="p3" color={item.last_price >= item.close_price ? AppColors.success : AppColors.error}>
          {calculateReturn(item.last_price, item.close_price)}
        </AppText>
        
      </View>
    </View>
  );
};

export default InstrumentItem;
