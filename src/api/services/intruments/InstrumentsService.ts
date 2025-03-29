// instrumentsService.ts
import { AxiosResponse } from "axios";
import api from "src/api/instances/api";  // Asegúrate de que la ruta es correcta
import { InstrumentTO } from "src/api/models/Instrument/Instrument";

const RESOURCES = {
  INSTRUMENTS: "/instruments",
};

export const getInstruments = async () => {
  try {
    const { data }: AxiosResponse<InstrumentTO[]> = await api.get(RESOURCES.INSTRUMENTS);
    return data;
  } catch (error: unknown) {
    console.error("Error getting instruments", error);
    throw error; // Lanza el error para que React Query u otro manejador lo capture
  }
};

export const InstrumentsService = {
  getInstruments,
};