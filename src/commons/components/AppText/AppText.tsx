import React from 'react';
import { Text, TextStyle } from 'react-native';
import { AppColors } from 'commons/utils/AppColors';
import { appTextStyle } from './AppText.styles';

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'label'
  | 'label2'
  | 'label3'
  | 'tiny'
  | 'currencyAmount';

export type AppTextProps = Text['props'] & {
  type?: TextType;
  bold?: boolean;
  color?: AppColors;
  align?: TextStyle['textAlign'];
  disabled?: boolean;
  onPress?: () => void;
  format?: boolean;
  numberOfLines?: number;
};

const AppText = ({
  testID,
  children,
  style,
  align,
  type = 'h1',
  bold = false,
  disabled = false,
  onPress,
  color = AppColors.white,
  ...rest
}: AppTextProps) => {
  // Obtener el estilo de la propiedad 'type'
  const styleProps = appTextStyle[type];
  

  // Determinar si el texto está deshabilitado
  const isDisabled = onPress && disabled;

  return (
    <Text
      testID={testID}
      style={[
        styleProps,
        bold && appTextStyle[`${type}_bold`],
        { color, textAlign: align },
        disabled && appTextStyle.disabled,
        style,
      ]}
      onPress={isDisabled ? undefined : onPress}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default React.memo(AppText);
