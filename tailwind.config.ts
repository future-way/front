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
        green: '#FF765E',
        orange2: '#FFAA8E',
        orange3: '#FFF1EF',
        deactivaction: '#E4E7ED',
        gray1: '#667277',
        gray2: '#E5E8EB',
        gray3: '#D9DCE2',
        gray4: '#BEC5CF',
        gray5: '#F5F6F7',
        gray6: '#F2F4F6',
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
        m: '0.9375rem',
        slg: '1.0625rem',
      },
    },
  },
  mode: 'jit',
  plugins: [],
} satisfies Config
