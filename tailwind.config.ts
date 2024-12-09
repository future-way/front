import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#2E3033',
        green: '#4BCA80',
        deactivaction: '#E4E7ED',
        gray1: '#667277',
        gray2: '#E5E8EB',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        pretendardSemiBold: ['PretendardSemiBold'],
        pretendardMedium: ['pretendardMedium'],
        pretendardBold: ['pretendardBold'],
      },
      fontSize: {
        xxs: '0.685rem',
        slg: '1.0625rem',
      },
    },
  },
  plugins: [],
} satisfies Config
