import React, { useState } from "react";
import {
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { AppColors } from "commons/utils/AppColors";
import { useSearch } from "src/api/queries/search/hooks/useSearch";
import { useDebounce } from "commons/hooks/useDebounce";
import { styles } from "./SearchModal.styles";
import SearchResult from "./components/SearchResult";
import AppSvgImage from "../AppSvgImage/AppSvgImage";
import { appResponsiveSize } from "commons/utils/ScreenUtils";

const SearchHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const text = useDebounce(searchQuery);
  const { data, isLoading, error } = useSearch(text);

  const inputWidth = useSharedValue(200);
  const inputOpacity = useSharedValue(1);
  const inputScale = useSharedValue(1);
  const iconOpacity = useSharedValue(1);

  const openSearch = () => {
    setModalVisible(true);
    inputWidth.value = withTiming(300, {
      duration: 500,
      easing: Easing.ease,
    });
    inputOpacity.value = withTiming(1, { duration: 500 });
    inputScale.value = withTiming(1, { duration: 500 });
    iconOpacity.value = withTiming(0, { duration: 500 });
  };

  const closeSearch = () => {
    setSearchQuery("");
    setModalVisible(false);
    inputWidth.value = withTiming(200, {
      duration: 500,
      easing: Easing.ease,
    });
    inputOpacity.value = withTiming(0, { duration: 500 });
    inputScale.value = withTiming(0.8, { duration: 500 });
    iconOpacity.value = withTiming(1, { duration: 500 });
  };

  const animatedInputStyle = useAnimatedStyle(() => {
    return {
      width: inputWidth.value,
      opacity: inputOpacity.value,
      transform: [{ scale: inputScale.value }],
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      opacity: iconOpacity.value,
    };
  });

  return (
    <>
      <View style={styles.header}>
      <AppSvgImage width={appResponsiveSize(30)} height={appResponsiveSize(30)} name="logo" style={styles.logo}/>

      
        <TouchableOpacity style={styles.inputContainer} onPress={openSearch}>
          <Animated.View style={[styles.icon, animatedIconStyle]}>
            <Ionicons name="search" size={appResponsiveSize(14)} color="white" />
          </Animated.View>
          <TextInput
            style={styles.input}
            placeholder="DYKA"
            placeholderTextColor="gray"
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <StatusBar barStyle="light-content" backgroundColor={AppColors.black} />
        <View style={styles.modalContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={closeSearch} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={14} color="white" />

              <Animated.View style={[styles.animatedInput, animatedInputStyle]}>
                <TextInput
                  style={styles.modalInput}
                  placeholder="DYKA"
                  placeholderTextColor="gray"
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text.toUpperCase())}
                  autoFocus
                />
              </Animated.View>
            </View>
          </View>
          <SearchResult results={data || []} loading={isLoading} />

        </View>
      </Modal>
    </>
  );
};

export default SearchHeader;
