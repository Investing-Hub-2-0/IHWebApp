/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Proje klasöründeki tüm dosyaları tarar
  ],
  theme: {
    extend: {}, // Özelleştirmeler için
  },
  plugins: [], // İsterseniz ekstra Tailwind eklentileri ekleyebilirsiniz
};
