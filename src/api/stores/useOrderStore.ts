import { create } from "zustand";

export interface Order {
    id: number;
    instrument_id: number;
    price: number;
    quantity: number;
    side: "BUY" | "SELL";
    status: "PENDING" | "FILLED" | "CANCELLED" | "REJECTED";
    type: "MARKET" | "LIMIT";
  }
interface OrdersStore {
  ordersByInstrument: Record<string, Order[]>; // Órdenes por instrumento
  addOrder: (instrumentId: string, order: Order) => void; // Añadir orden
  getOrders: (instrumentId: string) => Order[]; // Obtener órdenes por instrumento
}

export const useOrdersStore = create<OrdersStore>((set, get) => ({
  ordersByInstrument: {},

  addOrder: (instrumentId, order) => {
    set((state) => {
      const existingOrders = state.ordersByInstrument[instrumentId] || [];
      return {
        ordersByInstrument: {
          ...state.ordersByInstrument,
          [instrumentId]: [...existingOrders, order],
        },
      };
    });
  },

  getOrders: (instrumentId) => {
    const orders = get().ordersByInstrument[instrumentId] || [];
    return orders;
  },
}));