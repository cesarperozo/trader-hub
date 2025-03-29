export interface InstrumentTO {
    id: number;
    name: string;
    ticker: string;
    type: "ACCIONES" | "MONEDA";
    close_price: number;
    last_price: number;
  }