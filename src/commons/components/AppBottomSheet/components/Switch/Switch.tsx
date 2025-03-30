import AppButton from "commons/components/AppButton/AppButton";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import { appResponsiveSize } from "commons/utils/ScreenUtils";
import React, { useState } from "react";
import { View } from "react-native";

type SwitchProps = {
  options: string[];
  onSelect: (value: string) => void;
  title?: string;
  textError?: string;
};

const Switch: React.FC<SwitchProps> = ({
  options,
  onSelect,
  title,
  textError,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleOptionPress = (option: string) => {
    setSelectedOption(option); // Actualiza la opción seleccionada
    onSelect(option); // Notifica al componente padre
  };

  // Estilo animado para el fondo de la opción seleccionada

  return (
    <View>
      {title && (
        <AppText style={{ marginBottom: 8 }} type="p2">
          {title}
        </AppText>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 6,
          gap: 12,
        }}
      >
        {options.map((option) => {
          const isSelected = selectedOption === option;
          return (
            <View key={option} style={{ flex: 1 }}>
              <AppButton
                buttonHeight={appResponsiveSize(30)}
                buttonColor={
                  isSelected ? AppColors.primary : AppColors.secondary
                }
                onPress={() => handleOptionPress(option)}
                text={capitalizeFirstLetter(option)}
                textProps={{
                  color: isSelected ? AppColors.white : AppColors.primary,
                  type: "p2",
                }}
              />
            </View>
          );
        })}
      </View>
      {textError && (
        <AppText type="p3" color={AppColors.error}>
          {textError}
        </AppText>
      )}
    </View>
  );
};

export default Switch;
