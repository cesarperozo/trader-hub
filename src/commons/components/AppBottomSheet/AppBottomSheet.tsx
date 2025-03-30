import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetTimingConfigs,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect, useRef } from "react";
import { Easing } from "react-native-reanimated";
import { BackHandler, View } from "react-native";
import { styles } from "./AppBottomSheet.styles";
import AppText from "../AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import { useBottomSheetStore } from "src/api/stores/useBottomSheetStore";
import OrderFormContent from "./components/OrderFormContent";

const AppBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { openBottomSheet, setCloseBottomSheet, bottomSheetType, args} =
    useBottomSheetStore();

    console.log({args})
  
  useEffect(() => {
    setTimeout(() => {
      if (openBottomSheet) {
        bottomSheetRef.current?.present();
      }
    }, 200);
  }, [openBottomSheet]);

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
    setCloseBottomSheet();
  }, [setCloseBottomSheet]);

  useEffect(() => {
    const backHandler = () => {
      if (openBottomSheet) {
        handleClose();
        return true;
      }
      return false;
    };
    BackHandler.addEventListener("hardwareBackPress", backHandler);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [handleClose, openBottomSheet]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        onPress={handleClose}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [handleClose]
  );

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 250,
    easing: Easing.ease,
  });

  if (!openBottomSheet) {
    return <></>;
  }

  /*  const getContentByScreen = () => {
      if (contentType[bottomSheetType]) {
        return contentType[bottomSheetType];
      }
      return <DefaultContent />;
      
    }; */

  return (
    <BottomSheetModal
      animationConfigs={animationConfigs}
      ref={bottomSheetRef}
      index={0}
      enableDynamicSizing={true}
      backdropComponent={renderBackdrop}
      onDismiss={handleClose}
      backgroundStyle={{ backgroundColor: AppColors.darkestGray }}
      animateOnMount
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: AppColors.black,
        width: 70,
      }}
    >
      <BottomSheetView
        enableFooterMarginAdjustment
        style={styles.contentContainer}
      >
        <OrderFormContent/>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default AppBottomSheet;
