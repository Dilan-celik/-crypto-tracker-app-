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
      setData(result);
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