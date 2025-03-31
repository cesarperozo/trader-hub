import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import { Order } from "src/api/stores/useOrderStore";
import { styles } from "./OrderItem.styles";

const getStatusStyle = (
  status: "REJECTED" | "FILLED" | "PENDING" | "CANCELLED"
) => {
  const styles = {
    REJECTED: { borderColor: AppColors.error, color: AppColors.error },
    FILLED: { borderColor: undefined, color: AppColors.primary },
    PENDING: { borderColor: AppColors.primary, color: AppColors.primary },
    CANCELLED: { borderColor: AppColors.error, color: AppColors.error },
  };

  return styles[status];
};

const OrderItem = ({ ...item }: Order) => {
  const { borderColor, color } = getStatusStyle(item.status);
  const hasBorder = borderColor !== undefined;

  return (
    <View style={styles.container}>
      <View>
        <AppText bold type="p2" color={AppColors.white}>
          #{item.id}
        </AppText>
      </View>

      <View>
        <AppText bold type="p2" color={AppColors.white}>
          {item.side}
        </AppText>
      </View>

      <View
        style={[
          styles.badge,
          {
            borderColor: hasBorder ? borderColor : "transparent",
            borderWidth: hasBorder ? 1 : 0,
          },
        ]}
      >
        <AppText type="p2" style={{ color }}>
          {item.status.toLowerCase()}
        </AppText>
      </View>
    </View>
  );
};

export default OrderItem;
