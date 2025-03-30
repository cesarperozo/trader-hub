import { AppColors } from "commons/utils/AppColors";
import React from "react";
import { SvgProps } from "react-native-svg";
import Searching from "../../../assets/svg/searching.svg"

const SVG_IMAGES = {
  searching: Searching,
};

export type SvgImageName = keyof typeof SVG_IMAGES;

export type TypeIconProps = SvgProps & {
  name: SvgImageName;
};

const AppSvgImage = ({
  testID,
  name,
  color = AppColors.black,
  ...props
}: TypeIconProps) => {
  const SvgImage = SVG_IMAGES[name];

  if (!SvgImage) return null;

  return <SvgImage testID={testID} color={color} {...props} />;
};

export default React.memo(AppSvgImage);
