import React from "react";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import { TouchableOpacity, View } from "react-native";
import { InstrumentTO } from "src/api/models/Instrument/Instrument";
import { calculateReturn } from "./utils";
import { styles } from "./instrumentItem.styles";
import { useNavigation } from "@react-navigation/native";
import { TradingFlowNavigationProps } from "commons/navigation/navigators/TradingFlowNavigator";

const InstrumentItem = ({ ...item }: InstrumentTO) => {

  const navigation = useNavigation<TradingFlowNavigationProps>()

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("InstrumentDetails", { instrument: item})}
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
    </TouchableOpacity>
  );
};

export default InstrumentItem;
