import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';

type AppStatusBarProps = {
  barStyle?: 'light-content';
} & StatusBarProps;

const AppStatusBar = (props: AppStatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      barStyle={props.barStyle || 'dark-content'}
      backgroundColor={props.backgroundColor}
      animated
      translucent
      {...props}
    />
  ) : null;
};

export default AppStatusBar;