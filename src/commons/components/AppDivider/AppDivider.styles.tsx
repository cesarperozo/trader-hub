import { appResponsiveSize } from 'commons/utils/ScreenUtils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  divider: { height: appResponsiveSize(8, 'height') },
  line: { height: appResponsiveSize(80, 'height') / 100, width: '100%' },
});
