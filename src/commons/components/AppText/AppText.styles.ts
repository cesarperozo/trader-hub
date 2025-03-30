import { AppColors } from 'commons/utils/AppColors';
import { appTextProps } from 'commons/utils/ScreenUtils';
import { StyleSheet } from 'react-native';

export const appTextStyle = StyleSheet.create({
  h1: {
    fontFamily: 'Manrope-Regular',
    ...appTextProps(43.71, 32),
  },
  h1_bold: {
    fontFamily: 'Manrope-SemiBold',
  },
  h2: {
    fontFamily: 'Manrope-Regular',
    ...appTextProps(32.78, 24),
  },
  h2_bold: {
    fontFamily: 'Manrope-SemiBold',
  },
  h3: {
    fontFamily: 'Manrope-Regular',
    ...appTextProps(27.32, 20),
  },
  h3_bold: {
    fontFamily: 'Manrope-SemiBold',
  },
  h4: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    ...appTextProps(24.59, 18),
  },
  h4_bold: {
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  h5: {
    fontFamily: 'Manrope-Regular',
    ...appTextProps(24.59, 20),
  },
  h5_bold: {
    fontFamily: 'Manrope-SemiBold',
  },
  h6: {
    fontFamily: 'Manrope-Regular',
    ...appTextProps(24.59, 12),
  },
  h6_bold: {
    fontFamily: 'Manrope-SemiBold',
  },
  p1: {
    fontFamily: 'Inter-Regular',
    ...appTextProps(26, 16),
  },
  p1_bold: {
    fontFamily: 'Inter-Medium',
  },
  p2: {
    fontFamily: 'Inter-Regular',
    ...appTextProps(24, 14),
  },
  p2_bold: {
    fontFamily: 'Inter-Medium',
  },
  p3: {
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    ...appTextProps(18, 12),
  },
  p3_bold: {
    fontFamily: 'Inter-Medium',
  },
  label: {
    fontFamily: 'Inter-Regular',
    ...appTextProps(18, 16),
  },
  label_bold: {
    fontFamily: 'Inter-Medium',
    textDecorationLine: 'underline',
  },
  label2: {
    fontFamily: 'Inter-Regular',
    ...appTextProps(24, 12),
  },
  label2_bold: {
    fontFamily: 'Inter-Medium',
    textDecorationLine: 'underline',
  },
  label3: {
    fontFamily: 'Inter-Regular',
    ...appTextProps(24, 14),
  },
  label3_bold: {
    fontFamily: 'Inter-Medium',
    textDecorationLine: 'underline',
  },
  currencyAmount: {
    fontFamily: 'Manrope-Regular',
    ...appTextProps(52, 40),
  },
  currencyAmount_bold: {
    fontFamily: 'Manrope-SemiBold',
  },
  tiny: {
    fontFamily: 'Inter-Regular',
    ...appTextProps(18, 9),
  },
  tiny_bold: {
    fontFamily: 'Inter-Medium',
  },
  disabled: {
    color: AppColors.mediumGray,
  },
});
