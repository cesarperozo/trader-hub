import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppGestureHandlerRoot from "commons/components/AppGestureHandlerRoot/AppGestureHandlerRoot";
import AppNavigation from "commons/components/AppNavigation/AppNavigation";
import { useAppStartup } from "commons/hooks/useAppStartup";

export default function App() {
  
  const hola = "s";

  useAppStartup();
  return (
    <AppGestureHandlerRoot>
      <AppNavigation />
    </AppGestureHandlerRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
