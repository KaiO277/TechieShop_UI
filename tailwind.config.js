/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // đường dẫn tới tất cả các file có thể dùng class Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // màu xanh dương
        secondary: '#10B981', // màu xanh lá
        dark: '#1F2937',      // màu xám đậm
      },
    },
  },
  plugins: [],
}



