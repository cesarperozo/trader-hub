import { useMutation } from '@tanstack/react-query';
import { OrderRequest, OrdersServices,  } from 'src/api/services/order/OrdersCreateService';

// Hook para crear la orden
export const useCreateOrder = () => {
    return useMutation<any, Error, OrderRequest, unknown>({
        mutationFn: OrdersServices.createOrder,
    });
  };
