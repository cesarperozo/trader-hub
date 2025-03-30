import { AxiosResponse } from "axios";
import api from "src/api/instances/api"; 
import { PortfolioInstrumentTO } from "src/api/models/Portfolio/Portfolio";

const RESOURCES = {
  PORTFOLIO: "/portfolio",
};

export const getPortfolio = async () => {
  try {
    const { data }: AxiosResponse<PortfolioInstrumentTO[]> = await api.get(RESOURCES.PORTFOLIO);
    return data;
  } catch (error: unknown) {
    console.error("Error getting portfolio", error);
    throw error;
  }
};

export const PortfolioService = {
    getPortfolio,
};