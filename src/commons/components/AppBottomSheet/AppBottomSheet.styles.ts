import { appResponsiveSize } from "commons/utils/ScreenUtils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    maxHeight: appResponsiveSize(700),
    padding: appResponsiveSize(16),
  },
  contentContainerWithoutFooter: {
    marginBottom: appResponsiveSize(16),
  },
});
