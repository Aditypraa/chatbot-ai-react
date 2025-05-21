# 🤖 XioncoAI Chatbot

Chatbot AI modern dan responsif untuk Xionco Furniture dengan antarmuka yang bersih dan menarik, mirip dengan ChatGPT/Claude.

<div align="center">
  <img src="https://github.com/user-attachments/assets/0bdcfaef-c79b-499b-bc7d-6ee635fdb7a8" alt="XioncoAI Chatbot Preview" width="600px" />
</div>

## ✨ Fitur Unggulan

- 💻 Antarmuka modern dan responsif dengan mode gelap/terang
- 🧠 Fungsi chat berbasis AI waktu-nyata
- ⌨️ Indikator pengetikan
- 📝 Riwayat pesan dengan stempel waktu
- 🔄 Integrasi dengan API OpenRouter

## 🚀 Memulai

### Prasyarat

- Node.js 16+
- NPM atau Yarn

### Instalasi

1. Kloning repositori

   ```bash
   git clone <repository-url>
   cd chatbot-ai-react
   ```

2. Instalasi dependensi

   ```bash
   npm install
   # atau
   yarn
   ```

3. Siapkan variabel lingkungan

   ```bash
   cp .env.example .env
   ```

4. Tambahkan kunci API OpenRouter ke file `.env`

   ```
   VITE_OPENROUTER_API_KEY=kunci_api_openrouter_anda
   ```

5. Jalankan server pengembangan

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

6. Buka [http://localhost:5173](http://localhost:5173) di browser Anda

## 📦 Build untuk Produksi

```bash
npm run build
# atau
yarn build
```

File hasil build akan berada di direktori `dist`, siap untuk di-deploy.

## 🛠️ Teknologi yang Digunakan

- React 19
- TypeScript
- Tailwind CSS 4
- Vite 6
- Axios untuk komunikasi API

## 📝 Model AI

https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free

## 📋 Lisensi

Proyek ini bersifat eksklusif dan rahasia.
© Aditya Pratama
