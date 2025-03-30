export const calculateReturn = (
  lastPrice: number,
  closePrice: number
): string => {
  if (closePrice === 0) return "N/A"; 
  const retorno = ((lastPrice - closePrice) / closePrice) * 100;
  return `${retorno.toFixed(2)} %`;
};
