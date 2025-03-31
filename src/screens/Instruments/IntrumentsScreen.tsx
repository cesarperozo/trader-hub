import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import AppText from "commons/components/AppText/AppText";
import { useGetInstruments } from "src/api/queries/intruments/hooks/useGetInstruments";
import { AppColors } from "commons/utils/AppColors";
import AppSafeContainer from "commons/components/AppSafeContainer/AppSafeContainer";
import InstrumentItem from "./components/InstrumentItem";
import AppDivider from "commons/components/AppDivider/AppDivider";
import SearchHeader from "commons/components/SearchModal/SearchModal";

const InstrumentsScreen = () => {
  const { data, isLoading } = useGetInstruments();
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={AppColors.secondary} size={"large"} />
      </View>
    );
  }

  return (
    <AppSafeContainer safeTop safeBottom={false}>
      <SearchHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <InstrumentItem {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={AppDivider}
      />
    </AppSafeContainer>
  );
};

export default InstrumentsScreen;
