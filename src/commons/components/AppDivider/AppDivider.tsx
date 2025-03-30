import { AppColors } from 'commons/utils/AppColors';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './AppDivider.styles';

type AppDividerProps = {
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: AppColors;
};
const AppDivider = ({
  containerStyle,
  backgroundColor = AppColors.darkestGray,
}: AppDividerProps) => {
  return (
    <LinearGradient
      style={[styles.line, containerStyle]}
      start={{ y: 1, x: 0 }}
      end={{ y: 0, x: 1 }}
      locations={[0, 0.5, 1]}
      colors={[backgroundColor, '#E0E0E0', backgroundColor]}
    />
  );
};

export default AppDivider;
