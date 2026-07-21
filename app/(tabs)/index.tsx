import { CryptoCard } from '@/src/components/CryptoCard';
import { useCrypto } from '@/src/hooks/useCrypto';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const { data, loading, error, refresh } = useCrypto();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kripto Piyasasi 🚀</Text>
        <TouchableOpacity onPress={refresh} style={styles.refreshButton}>
          <Text style={styles.refreshText}>Yenile</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#6366F1" />
          <Text style={styles.loadingText}>Piyasa verileri cekiliyor...</Text>
        </View>
      )}

      {error && (
        <View style={styles.center}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {!loading && !error && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CryptoCard item={item} />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', paddingTop: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111827' },
  refreshButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  refreshText: { color: '#FFFFFF', fontWeight: '600', fontSize: 13 },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, color: '#6B7280', fontSize: 15 },
  errorText: { color: '#EF4444', fontSize: 15 },
});