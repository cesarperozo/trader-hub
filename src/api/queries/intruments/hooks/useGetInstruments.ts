import { useQuery } from '@tanstack/react-query';
import { IntrumentsKeys } from '../InstrumentsKeys';
import { InstrumentsService } from 'src/api/services/intruments/InstrumentsService';
import { InstrumentTO } from 'src/api/models/Instrument/Instrument';

export const  useGetInstruments = () => {
  return useQuery<InstrumentTO[]>({
    queryKey: IntrumentsKeys.intruments,
    queryFn: () => InstrumentsService.getInstruments(),
  });
}