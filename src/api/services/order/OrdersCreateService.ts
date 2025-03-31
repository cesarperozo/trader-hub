import { AxiosResponse } from "axios";
import api from "src/api/instances/api"; 

const RESOURCES = {
  ORDERS: "/orders", 
};

export type OrderRequest = {
  instrument_id: number;
  side: string;
  type: string;
  quantity: number;
  price?: number; 
};

const createOrder = async (orderInfo: OrderRequest): Promise<void> => {

  try {
    const { data }: AxiosResponse = await api.post(RESOURCES.ORDERS, {
      ...orderInfo,
    });
    return data;
  } catch (error: unknown) {
    console.error("Error creating order", error);
    throw error;
  }
};

// Exportar el servicio
export const OrdersServices = {
  createOrder,
};
