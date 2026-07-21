import { CryptoItem } from '../types/crypto';

export const fetchCryptoData = async (): Promise<CryptoItem[]> => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );

  if (!response.ok) {
    throw new Error('Kripto verileri alinamadi.');
  }

  return await response.json();
};