import React, { useMemo } from "react";
import { View, Pressable } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { BottomTabBarProps, BottomTabNavigationEventMap, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import AppText from "../AppText/AppText";
import { NavigationHelpers, ParamListBase, RouteProp } from "@react-navigation/native";
import { styles } from "./ApptabBar.styles";
import { AppColors } from "commons/utils/AppColors";

type TabButtonProps = {
    route: RouteProp<ParamListBase, string>;
    options: BottomTabNavigationOptions;
    isFocused: boolean;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  };

const TabButton = ({ route, options, isFocused, navigation }: TabButtonProps) => {
  const onPress = () => {
    if (!isFocused) {
      navigation.navigate(route.name);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(isFocused ? -5 : 0, { duration: 500 }) }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isFocused ? 1 : 0.7, { duration: 300 }),
    transform: [{ translateY: withTiming(isFocused ? -5 : 0, { duration: 500 }) }],
  }));

  const label = (options.tabBarLabel || options.title || route.name) as string;

  return (
    <Pressable
      style={styles.tabButton}
      onPress={onPress}
      key={route.key}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
    >
      <Animated.View style={animatedStyle}>
        {options?.tabBarIcon?.({ focused: isFocused, size: 25, color: isFocused ? AppColors.primary : AppColors.mediumGray })}
      </Animated.View>
      <Animated.View style={textAnimatedStyle}>
        <AppText color={isFocused ? AppColors.primary :  AppColors.mediumGray} type="p3">{label}</AppText>
      </Animated.View>
    </Pressable>
  );
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const routes = useMemo(() => state.routes.slice(0, 2), [state.routes]);

  return (
      <View style={styles.tabContainer}>
        {routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          return <TabButton key={route.key} route={route} options={options} isFocused={isFocused} navigation={navigation} />;
        })}
      </View>
  );
};

export default CustomTabBar;