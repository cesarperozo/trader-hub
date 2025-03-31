import { appResponsiveSize } from "commons/utils/ScreenUtils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
  marginBottom: appResponsiveSize(12),
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 12

  },

});
