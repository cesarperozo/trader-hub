import React, { useState } from "react";
import { View } from "react-native";
import AppTextInput from "commons/components/AppTextInput/AppTextInput";
import AppText from "commons/components/AppText/AppText";
import Switch from "./Switch/Switch";
import { styles } from "./OrderFromContent.styles";
import { AppColors } from "commons/utils/AppColors";
import { appResponsiveSize } from "commons/utils/ScreenUtils";
import AppButton from "commons/components/AppButton/AppButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useBottomSheetStore } from "src/api/stores/useBottomSheetStore";
import { useCreateOrder } from "src/api/queries/orders/hooks/useCreateOrders";
import { useOrdersStore } from "src/api/stores/useOrderStore";

type FormType = {
  quantity: string;
  type: string;
  price: string;
};
type FormValues = FormType;

const initialValues: FormValues = {
  quantity: "",
  type: "",
  price: "",
};
const OrderFormContent: React.FC = () => {
  const [isSubmitSucces, setIsSubmitSucces] = useState(false);
  const addOrder = useOrdersStore(state => state.addOrder);

  const  createOrder  = useCreateOrder();
  const { args } =
    useBottomSheetStore();

  const { instrument_id, side } = args as {
    instrument_id: string;
    side: string;
  };

  const OrderSchema = Yup.object().shape({
    type: Yup.string().required("Order type is required"),
    quantity: Yup.number()
      .typeError("Only numbers are allowed")
      .positive("The amount must be positive")
      .required("Amount is required"),
    price: Yup.number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .typeError("Only numbers are allowed")
      .positive("Limit price must be positive")
      .when("type", {
        is: "LIMIT",
        then: (schema) => schema.required("Limit price is required"),
        otherwise: (schema) => schema.notRequired(),
      }),
  });

  const {
    values,
    handleChange,
    handleSubmit,
 
    errors,
    touched,
    setFieldValue,
  } = useFormik<FormType>({
    initialValues,
    validationSchema: OrderSchema,
    onSubmit: async (orderInfo) => {
      const body = {
        instrument_id: Number(instrument_id),
        side: side,
        type: orderInfo.type,
        quantity: Number(orderInfo.quantity),
        ...(orderInfo.type === "LIMIT" && { price: Number(orderInfo.price) }),
      };

      createOrder.mutateAsync(body, {
        onSuccess: (data) => {
            addOrder(instrument_id, data)
        }
      });

    },
  });
  

  return (
    <View>
      <View style={styles.titleContainer}>
        <AppText type="h2">{`Create a ${side?.toString()?.toLowerCase()} order`}</AppText>
      </View>

      <Switch
        title="Order Type"
        options={["MARKET", "LIMIT"]}
        onSelect={(value) => setFieldValue("type", value)}
        textError={errors["type"] ? String(errors["type"]) : undefined}
      />
      <AppTextInput
        label="Amount"
        placeholder="Total"
        onChangeText={handleChange("quantity")}
        value={String(values.quantity)}
        keyboardType="numeric"
        inputMode="numeric"
        error={
          errors["quantity"] && touched["quantity"]
            ? String(errors["quantity"])
            : undefined
        }
      />
      {values.type === "LIMIT" && (
        <View style={{ marginTop: 12 }}>
          <AppTextInput
            label="Limit"
            placeholder="35.6"
            onChangeText={handleChange("price")}
            value={String(values.price)}
            keyboardType="numeric"
            inputMode="numeric"
            error={
              errors["price"] && touched["price"]
                ? String(errors["price"])
                : undefined
            }
          />
        </View>
      )}
      <View
        style={{
          height: 1,
          backgroundColor: AppColors.darkGray,
          marginVertical: appResponsiveSize(24),
        }}
      />

      <View style={{ gap: 12 }}>
        <AppButton
          text="Confirm"
          buttonHeight={appResponsiveSize(40)}
          onPress={handleSubmit}
        />
        <AppButton
          buttonStyle={{
            borderWidth: 1,
            borderColor: AppColors.mediumGray,
          }}
          buttonColor={"transparent"}
          text="Cancerlar"
          buttonHeight={appResponsiveSize(40)}
        />
      </View>
    </View>
  );
};

export default OrderFormContent;
