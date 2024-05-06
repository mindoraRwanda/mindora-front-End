/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend:{
      screens:{
        'cm': '980px',
        'csm': '560px',
      },
      colors: {
        brandColor:'#800080',
        brandColorTwo:'#0082DE',
        lightGray: '#00337C',
        brownColor: '#604343',
        yellowColor: '#FEE500',
        overlayColor: 'rgba(147, 51, 234, 0.45)',
      },
      borderRadius: {
        circle: '50%',
      },
      fontFamily:{
        primaryFont: 'Poppins',
        interFont: 'Inter',
      },
    },
  },

  plugins: [],
}
