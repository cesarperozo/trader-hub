import React from "react";
import { ActivityIndicator, View } from "react-native";
import AppText from "commons/components/AppText/AppText";
import { useGetInstruments } from "src/api/queries/intruments/hooks/useGetInstruments";
import { AppColors } from "commons/utils/AppColors";

const InstrumentsScreen = () => {
  const { data, isLoading } = useGetInstruments();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator color={AppColors.secondary} size={"large"} />
      </View>
    );
  }
  return (
    <View>
      <AppText>List of Instruments</AppText>
      {/* Aquí puedes agregar más contenido y lógica */}
    </View>
  );
};

export default InstrumentsScreen;
