import { AxiosResponse } from "axios";
import api from "src/api/instances/api";
import { InstrumentTO } from "src/api/models/Instrument/Instrument";

const RESOURCES = {
  SEARCH: "/search",
};
export const Search = async (query: string) => {
  console.log("se disparo")
  try {
    const { data }: AxiosResponse<InstrumentTO[]> = await api.get(
      RESOURCES.SEARCH,
      {
        params: { query },
      }
    );
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

export const SearchService = {
  Search,
};
