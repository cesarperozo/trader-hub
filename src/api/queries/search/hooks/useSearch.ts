import { useQuery } from '@tanstack/react-query';
import { InstrumentTO } from 'src/api/models/Instrument/Instrument';
import { SearchService } from 'src/api/services/search/SearchService';

export const useSearch = (query: string) => {
  return useQuery<InstrumentTO[]>({
    queryKey: ['search', query],
    queryFn: () => SearchService.Search(query),
    enabled: query.trim().length > 0,
    refetchOnWindowFocus: false,  
  });
}