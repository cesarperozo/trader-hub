import { Dimensions, PixelRatio, Platform } from 'react-native';

export const DIMENSIONS = {
  WIDTH: 360,
  HEIGHT: 779,
};

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / DIMENSIONS.WIDTH;
const hscale: number = SCREEN_HEIGHT / DIMENSIONS.HEIGHT;

const W_FACTOR = wscale * (wscale < 0.9 ? 0.9 : 1);
const H_FACTOR = hscale * (hscale < 0.9 ? 0.9 : 1);

export type ResponsiveBased = 'width' | 'height';

export const appResponsiveText = (size: number) =>
  size * (W_FACTOR < H_FACTOR ? W_FACTOR : H_FACTOR);

export const appTextProps = Platform.select({
  ios: (lineHeight: number, fontSize: number) => ({
    fontSize: appResponsiveText(fontSize) * FONT_SCALE,
    lineHeight: appResponsiveText(lineHeight) * FONT_SCALE,
  }),
  android: (lineHeight: number, fontSize: number) => ({
    fontSize: appResponsiveText(fontSize) * FONT_SCALE,
    lineHeight: appResponsiveText(lineHeight) * FONT_SCALE,
  }),
  default: (lineHeight, fontSize) => ({
    fontSize: appResponsiveText(fontSize) * FONT_SCALE,
    lineHeight: appResponsiveText(lineHeight) * FONT_SCALE,
  }),
});

export const MAX_FONT_SCALE = 1.1;
export const IS_FONT_SCALED = PixelRatio.getFontScale() > MAX_FONT_SCALE;
export const FONT_SCALE = IS_FONT_SCALED
  ? MAX_FONT_SCALE
  : PixelRatio.getFontScale();
