/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VedicPure Brand Colors - Premium Ghee Palette
        gold: {
          50: '#FFF8E7',
          100: '#FFEDC2',
          200: '#FFE099',
          300: '#FFD470',
          400: '#E6BB6A',
          500: '#D4A855',
          600: '#C68D22',
          700: '#9A6E1A',
          800: '#6E4F12',
          900: '#42300B',
        },
        saffron: {
          DEFAULT: '#D48A00',
          light: '#E6A020',
          dark: '#B87500',
        },
        ivory: {
          DEFAULT: '#FFF8EE',
          dark: '#FFF3E0',
        },
        brown: {
          50: '#F5F1EE',
          100: '#E8DDD5',
          200: '#D4C4B8',
          300: '#B8A597',
          400: '#8B7263',
          500: '#5C4A3D',
          600: '#3D322A',
          700: '#2B1F1A',
          800: '#1C1410',
          900: '#0F0A08',
        },
        // Keep primary for backwards compatibility
        primary: {
          50: '#FFF8E7',
          100: '#FFEDC2',
          200: '#FFE099',
          300: '#FFD470',
          400: '#E6BB6A',
          500: '#D4A855',
          600: '#C68D22',
          700: '#9A6E1A',
          800: '#6E4F12',
          900: '#42300B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'wider-xl': '0.15em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'golden-shimmer': 'linear-gradient(135deg, #C68D22 0%, #E6BB6A 50%, #C68D22 100%)',
      },
    },
  },
  plugins: [],
}
