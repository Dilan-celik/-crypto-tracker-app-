# Crypto Tracker App

React Native ve Expo altyapısı kullanılarak geliştirilmiş, canlı kripto para piyasası verilerini takip etmeyi sağlayan, modern ve performanslı bir mobil uygulama projesidir.

Proje, hem **Expo Go** ekosistemi üzerinden hızlı prototiplemeye hem de **React Native CLI** mantığına uyumlu modüler bir mimariye dayalı olarak inşa edilmiştir.

---

## 📌 Proje Özellikleri

* **Canlı Piyasa Verileri:** CoinGecko REST API entegrasyonu sayesinde piyasadaki en popüler kripto varlıkların anlık fiyatları ve 24 saatlik yüzde değişim oranları sunulur.
* **Dinamik Fiyat Takibi (Simülasyon):** Yenileme tetiklendiğinde veriler üzerindeki anlık dalgalanmaları (anlık değişimleri) ekran arayüzünde canlı simüle eder.
* **Aşağı Çekerek Yenileme (Pull-to-Refresh):** Mobil UX standartlarına uygun olarak `FlatList` bileşeni üzerinden `RefreshControl` desteği barındırır.
* **Katmanlı ve Temiz Mimari:**
  * **TypeScript** ile tip güvenliği (Type Safety).
  * **Custom Hooks** (`useCrypto`) ile iş mantığı (business logic) ve UI katmanının tamamen ayrılması.
  * **Servis Katmanı** (`cryptoApi`) üzerinden modüler API yönetimi.

---

## 🛠️ Teknolojik Birliktelik (Expo & React Native)

Bu proje, React Native'in gücünü Expo'nun sağladığı geliştirici deneyimi (DX) ile birleştirir:

| Teknoloji | Projedeki Rolü |
| :--- | :--- |
| **React Native** | Uygulamanın temelini oluşturan, köprülü (bridge) mimari ile native UI bileşenlerini (`View`, `Text`, `FlatList`) render eden ana kütüphanedir. |
| **Expo (Expo Router)** | Build alma, dosya tabanlı yönlendirme (file-based routing), bağımlılık yönetimi ve cihazda anında test etme süreçlerini kolaylaştırır. |
| **TypeScript** | `CryptoItem` arabirimi (interface) ile API'den gelen verilerin kod tabanında hatasız işlenmesini sağlar. |

---

## 📂 Dosya ve Klasör Yapısı

```text
crypto-tracker-app/
├── app/                  # Expo Router sayfa yapılandırmaları
│   ├── _layout.tsx       # Root layout ve tema konfigürasyonları
│   └── (tabs)/
│       └── index.tsx     # Ana ekran (Kripto liste görünümü)
└── src/                  # Modüler uygulama mimarisi
    ├── components/       # UI Bileşenleri (Örn: CryptoCard)
    ├── hooks/            # Custom React Hook'ları (Örn: useCrypto)
    ├── services/         # API İstek Fonksiyonları (Örn: fetchCryptoData)
    └── types/            # TypeScript Interface ve Tipleri (Örn: CryptoItem)
