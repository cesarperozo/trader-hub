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
import { Ionicons } from "@expo/vector-icons";

type FormType = {
  quantity: string;
  type: string;
  price: string;
};

const initialValues: FormType = {
  quantity: "",
  type: "",
  price: "",
};

const OrderFormContent: React.FC = () => {
  const [precioAccion, setPrecioAccion] = useState(95);
  const [amountType, setAmountType] = useState<"shares" | "pesos">("shares");
  const addOrder = useOrdersStore((state) => state.addOrder);
  const createOrder = useCreateOrder();
  const { args, setCloseBottomSheet } = useBottomSheetStore();

  const { instrument_id, side } = args as {
    instrument_id: string;
    side: string;
  };

  const OrderSchema = Yup.object().shape({
    type: Yup.string().required("Order type is required"),
    quantity: Yup.number()
      .typeError("Only numbers are allowed")
      .positive("The amount must be positive")
      .required("Amount is required")
      .integer("No se permiten fracciones de acciones"),
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
    resetForm,
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
          addOrder(instrument_id, data);
        },
      });
    },
  });

  const handleCancel = () => {
    setCloseBottomSheet();
  };

  // Función para actualizar `quantity` si el usuario ingresa un Amount in pesos
  const handleTotalAmountChange = (text: string) => {
    const total = Number(text);
    if (!isNaN(total) && total > 0) {
      const cantidadAcciones = Math.floor(total / precioAccion);
      setFieldValue("quantity", cantidadAcciones.toString());
    } else {
      setFieldValue("quantity", "");
    }
  };

  if (createOrder.isSuccess) {
    return (
      <View style={{ alignItems: "center", gap: 20 }}>
        <View style={styles.titleContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={AppColors.success}
          />
          <AppText type="h3">Order created successfully</AppText>
        </View>
        <AppButton
          onPress={handleCancel}
          buttonStyle={{
            borderWidth: 1,
            borderColor: AppColors.mediumGray,
          }}
          buttonColor={"transparent"}
          text="Go back"
          buttonHeight={appResponsiveSize(40)}
        />
      </View>
    );
  }

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

      <View style={{ marginVertical: 16 }}>
        <Switch
          options={["Number of shares", "Amount in pesos"]}
          onSelect={(value) => {
            setAmountType(value === "Number of shares" ? "shares" : "pesos");
            setFieldValue("quantity", "");
            setFieldValue("price", "");
          }}
        />
      </View>

      {amountType === "shares" ? (
        <AppTextInput
          label="Number of shares"
          placeholder="Ej: 10"
          onChangeText={handleChange("quantity")}
          value={values.quantity}
          keyboardType="numeric"
          inputMode="numeric"
          error={
            errors["quantity"] && touched["quantity"]
              ? String(errors["quantity"])
              : undefined
          }
        />
      ) : (
        <AppTextInput
          label="Amount in pesos"
          placeholder="Ej: 1000"
          onChangeText={handleTotalAmountChange}
          keyboardType="numeric"
          inputMode="numeric"
        />
      )}

      {values.type === "LIMIT" && (
        <View style={{ marginTop: 12 }}>
          <AppTextInput
            label="Limit Price"
            placeholder="Ej: 35.6"
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
          onPress={handleCancel}
          buttonStyle={{
            borderWidth: 1,
            borderColor: AppColors.mediumGray,
          }}
          buttonColor={"transparent"}
          text="Cancel"
          buttonHeight={appResponsiveSize(40)}
        />
      </View>
    </View>
  );
};

export default OrderFormContent;
