import { AppColors } from 'commons/utils/AppColors';
import { appResponsiveSize, SCREEN_PADDING } from 'commons/utils/ScreenUtils';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SCREEN_MIN_PADDING_BOTTOM = appResponsiveSize(34, 'height');

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: AppColors.black,
      paddingHorizontal: SCREEN_PADDING.horizontal,
    },
    safeTop: {
      paddingTop: insets.top,
    },
    safeBottom: {
      paddingBottom:
        insets.bottom < SCREEN_MIN_PADDING_BOTTOM
          ? SCREEN_MIN_PADDING_BOTTOM
          : insets.bottom,
    },
    noPadding: {
      paddingHorizontal: 0,
    },
  });
};
