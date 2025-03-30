import { AppColors } from "commons/utils/AppColors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#161616",
      marginTop: 10,
    },
    logo: {
      marginRight: 10,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: AppColors.darkestGray,
      borderRadius: 50,
      paddingHorizontal: 10,
      height: 40,
  
      flex: 1,
    },
    modalInput: {
      flex: 1,
      color: "white",
      paddingVertical: 8,
    },
    input: {
      flex: 1,
      color: "white",
      paddingVertical: 8,
    },
    icon: {
      marginRight: 10,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: AppColors.black,
      paddingHorizontal: 16,
    },
    backButton: {
      marginRight: 10, // Espaciado para que no quede pegada al input
    },
    searchBar: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: AppColors.darkestGray,
      borderRadius: 50,
      paddingHorizontal: 10,
      gap: 10,
      height: 40,
    },
    animatedInput: {
      flex: 1,
    },
  
    resultsContainer: {
      flex: 1,
      marginTop: 20,
      backgroundColor: "#222",
      borderRadius: 8,
      padding: 10,
    },
  });