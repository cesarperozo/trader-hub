import Constants from "expo-constants";

export const defaultConfig = {
  baseURL: Constants.expoConfig?.extra?.BASE_URL || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};