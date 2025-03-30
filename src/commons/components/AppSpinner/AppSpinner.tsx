import { AppColors } from 'commons/utils/AppColors';
import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

const AppSpinner = (props: ActivityIndicatorProps) => {
  return (
    <ActivityIndicator
      color={AppColors.secondary}
      size={"large"}
      {...props}
    />
  );
};

export default AppSpinner;
