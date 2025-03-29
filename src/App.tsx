import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AppGestureHandlerRoot from "commons/components/AppGestureHandlerRoot/AppGestureHandlerRoot";
import AppNavigation from "commons/components/AppNavigation/AppNavigation";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from '.config/reactQuery/reactQueryConfig';


export default function App() {
  return (
    <AppGestureHandlerRoot>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
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
