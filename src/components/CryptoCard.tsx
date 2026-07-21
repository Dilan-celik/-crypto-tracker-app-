import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CryptoItem } from '../types/crypto';

interface Props {
  item: CryptoItem;
}

export const CryptoCard = ({ item }: Props) => {
  const isPositive = item.price_change_percentage_24h >= 0;

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.symbol}>{item.symbol.toUpperCase()}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.current_price.toLocaleString()}</Text>
        <Text style={[styles.change, isPositive ? styles.green : styles.red]}>
          {isPositive ? '+' : ''}{item.price_change_percentage_24h?.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: { width: 40, height: 40, borderRadius: 20 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  symbol: { fontSize: 13, color: '#9CA3AF', marginTop: 2 },
  priceContainer: { alignItems: 'flex-end' },
  price: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  change: { fontSize: 13, fontWeight: '600', marginTop: 2 },
  green: { color: '#10B981' },
  red: { color: '#EF4444' },
});