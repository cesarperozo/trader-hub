import { create } from "zustand";
import shallow from "zustand/shallow";


// Interfaz para las órdenes
interface Order {
  id: string;
  instrument_id: string;
  price: number;
  quantity: number;
  side: string;
  status: string;
  type: string;
}

// Interfaz del estado global
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