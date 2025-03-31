import { AppColors } from "commons/utils/AppColors";
import { StyleSheet } from "react-native";


export const styles = (bottom: number) => {
  return StyleSheet.create({
    tabContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      backgroundColor: AppColors.black,
      height: 64,
      marginBottom: bottom / 2,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      marginBottom: 4
    },
  });
}
