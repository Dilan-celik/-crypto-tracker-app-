import { useEffect, useState } from 'react';
import { fetchCryptoData } from '../services/cryptoApi';
import { CryptoItem } from '../types/crypto';

export const useCrypto = () => {
  const [data, setData] = useState<CryptoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchCryptoData();

      // Yenilendiğinde değerlerin değiştiğini görmek için rastgele % -2 ile % +2 arası küçük dalgalanmalar ekliyoruz
      const simulatedData = result.map((item) => {
        const randomFactor = 1 + (Math.random() * 0.04 - 0.02); // -%2 ile +%2 arası
        return {
          ...item,
          current_price: parseFloat((item.current_price * randomFactor).toFixed(2)),
          price_change_percentage_24h: parseFloat(
            (item.price_change_percentage_24h + (Math.random() * 2 - 1)).toFixed(2)
          ),
        };
      });

      setData(simulatedData);
    } catch (err) {
      setError('Veriler yuklenirken bir sorun olustu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { data, loading, error, refresh: loadData };
};