import { AppColors } from "commons/utils/AppColors";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "commons/components/AppText/AppText";
import { StyleSheet } from "react-native";
import { TradingFlowNavigationProps } from "commons/navigation/navigators/TradingFlowNavigator";
import { useNavigation } from "@react-navigation/native";

const InstrumentDetailHeader: React.FC = () => {
  const navigation = useNavigation<TradingFlowNavigationProps>();

  return (
    <View style={styles.titleHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons color={AppColors.white} name="arrow-back" size={28} />
      </TouchableOpacity>
      <AppText type="h2">Instrument Details</AppText>
    </View>
  );
};

export const styles = StyleSheet.create({
  titleHeader: {
    marginTop: 16,
    marginBottom: 24,
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
  },
});

export default InstrumentDetailHeader;
