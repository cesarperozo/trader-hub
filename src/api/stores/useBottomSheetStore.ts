import { create } from "zustand";

export type BottomSheetType = "DEFAULT";

type BottomSheetOptions = {
  showFooter?: boolean;
  args?: string | number | {};
  callback?: () => void;
};

type BottomSheetState = {
  openBottomSheet: boolean;
  bottomSheetType: BottomSheetType;
} & BottomSheetOptions;

type BottomSheetActions = {
  setOpenBottomSheet: (
    bottomSheetType: BottomSheetType,
    options?: BottomSheetOptions
  ) => void;
  setCloseBottomSheet: () => void;
};

const BottomSheetInitialState: BottomSheetState = {
  openBottomSheet: false,
  bottomSheetType: "DEFAULT",
  showFooter: true,
  args: {},
  callback: undefined,
};

export const useBottomSheetStore = create<
  BottomSheetState & BottomSheetActions
>((set) => ({
  ...BottomSheetInitialState,

  setOpenBottomSheet: (bottomSheetType, options) =>
    set({
      openBottomSheet: true,
      bottomSheetType,
      showFooter: options?.showFooter ?? true,
      args: options?.args ?? "",
      callback: options?.callback,
    }),

  setCloseBottomSheet: () =>
    set({
      openBottomSheet: false,
      showFooter: true,
    }),
}));
