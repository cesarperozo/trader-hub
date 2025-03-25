import { useState, useEffect } from "react";
import { useFonts } from "expo-font";

export function useAppStartup() {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Manrope-Regular": require("../../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("../../assets/fonts/Manrope-SemiBold.ttf"),
  });

  const prepareApp = async () => {
    if (fontsLoaded) setIsReady(true);
  };

  useEffect(() => {
    prepareApp();
  }, [fontsLoaded]);

  return isReady;
}
