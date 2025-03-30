import React, { useMemo } from "react";

import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { AppColors } from "commons/utils/AppColors";
import { appResponsiveSize } from "commons/utils/ScreenUtils";
import AppText, { AppTextProps } from "../AppText/AppText";
import { withDefaults } from "commons/utils/utils";
import { StyleSheet } from "react-native";

export interface ButtonProps {
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
  buttonHeight?: number;
  textProps?: AppTextProps;
  colorIndicator?: string;
  buttonColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  colorText?: AppColors;
  onPress?: any;
  borderRadius?: number;
}

const defaultProps: ButtonProps = {
  text: "",
  buttonColor: AppColors.primary,
  colorIndicator: AppColors.white,
  colorText: AppColors.white,
  onPress: () => {},
};

const AppButton: React.FC<ButtonProps> = ({
  text,
  isLoading,
  disabled,
  colorIndicator,
  buttonStyle,
  buttonColor,
  textProps,
  colorText,
  onPress,
  buttonHeight,
}) => {
  const handlePress = () => {
    if (isLoading) {
      return;
    }
    onPress?.();
  };
  const styleOpacity = useMemo(() => {
    return {
      opacity: disabled ? 0.5 : 1,
    };
  }, [disabled]);
  return (
    <TouchableOpacity
      style={[
        styles.buttonColor,
        buttonStyle,
        {
          height: appResponsiveSize(buttonHeight || 56),
          backgroundColor: buttonColor,
        },
        disabled && styleOpacity,
      ]}
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {text && !isLoading && (
        <AppText type="p2" color={colorText} {...textProps}>
          {text}
        </AppText>
      )}
      {isLoading && <ActivityIndicator color={colorIndicator} size="small" />}
    </TouchableOpacity>
  );
};

export default withDefaults(AppButton, defaultProps);

const styles = StyleSheet.create({
  buttonColor: {
    borderRadius: 8,
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});


