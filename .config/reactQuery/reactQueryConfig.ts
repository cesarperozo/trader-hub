import { QueryClient } from '@tanstack/react-query';  // Ahora importas desde TanStack Query

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: false,
    },
  },
});
