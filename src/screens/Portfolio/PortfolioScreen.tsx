import AppDivider from "commons/components/AppDivider/AppDivider";
import AppSafeContainer from "commons/components/AppSafeContainer/AppSafeContainer";
import AppText from "commons/components/AppText/AppText";
import SearchHeader from "commons/components/SearchModal/SearchModal";
import { AppColors } from "commons/utils/AppColors";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useGetPortfolio } from "src/api/queries/Portfolio/hooks/useGetPortfolio";
import PortfolioItem from "./components/PortfolioItem";
import { useBottomSheetStore } from "src/api/stores/useBottomSheetStore";
import { useEffect } from "react";

const PortfolioScreen = () => {
  const { data, isLoading } = useGetPortfolio();


 
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={AppColors.secondary} size={"large"} />
      </View>
    );
  }
  return (
    <AppSafeContainer safeBottom={false}>
      <SearchHeader />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <AppText bold type="p3" color={AppColors.mediumGray}>
            Name/Quantity{" "}
          </AppText>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <AppText bold align="left" type="p3" color={AppColors.mediumGray}>
            Price
          </AppText>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <AppText bold type="p3" color={AppColors.mediumGray}>
            L/P
          </AppText>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.instrument_id)}
        renderItem={({ item }) => <PortfolioItem {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={AppDivider}
      />
    </AppSafeContainer>
  );
};

export default PortfolioScreen;
