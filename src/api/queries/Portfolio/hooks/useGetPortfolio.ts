import { useQuery } from '@tanstack/react-query';
import { PortfolioService } from 'src/api/services/portfolio/PortfolioService';

export const  useGetPortfolio = () => {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: () => PortfolioService.getPortfolio(),
    retry: 3
  });
}