import React, { useEffect } from 'react';
import {
  BackHandler,
  Modal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useStyles } from './AppSafeContainer.style';

export interface AppSafeContainerProps {
  children?: React.ReactNode;
  noPadding?: boolean;
  safeTop?: boolean;
  safeBottom?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  isLoading?: boolean;
}

const AppSafeContainer = ({
  children,
  safeTop = false,
  safeBottom = true,
  noPadding = false,
  style,
  isLoading = false,
  testID,
}: AppSafeContainerProps) => {
  const styles = useStyles();

  useEffect(() => {
    const backAction = () => {
      return isLoading;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [isLoading]);

  return (
    <>
      <View
        testID={testID}
        style={StyleSheet.flatten([
          styles.container,
          noPadding && styles.noPadding,
          safeTop && styles.safeTop,
          safeBottom && styles.safeBottom,
          style,
        ])}
      >
        {children}
      </View>
      <Modal
        visible={isLoading}
        transparent
      />
    </>
  );
};

export default AppSafeContainer;
