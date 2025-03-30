import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';
import AppText from '../AppText/AppText';
import { AppColors } from 'commons/utils/AppColors';
import { appResponsiveSize } from 'commons/utils/ScreenUtils';

interface AppTextInputProps extends TextInputProps {
  label: string;
  error?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ label, error, ...textInputProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <AppText style={styles.label} type='p2'>{label}</AppText>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused, error && styles.inputError]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={AppColors.darkGray}
        {...textInputProps}
        cursorColor={AppColors.primary}
      />
      {error && <AppText type='p3' style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 6,
  },
  input: {
    height: appResponsiveSize(38),
    borderWidth: 1,
    borderColor:  AppColors.mediumGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: AppColors.mediumGray,
    color: AppColors.white
  },
  inputFocused: {
    borderColor: AppColors.primary,
  },
  inputError: {
    borderColor: AppColors.error,
  },
  errorText: {
    color: 'red',
  },
});

export default AppTextInput;