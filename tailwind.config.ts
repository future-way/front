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
        orange1: '#FF765E',
        orange2: '#FFAA8E',
        orange3: '#FFF1EF',
        orange4: '#FF655E',
        gray1: '#667277',
        gray2: '#E5E8EB',
        gray3: '#D9DCE2',
        gray4: '#BEC5CF',
        gray5: '#F5F6F7',
        gray6: '#F2F4F6',
        gray7: '#E4E7ED',
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
        l: '1.625rem',
      },
      borderRadius: {
        left: '0px 1.375rem 1.375rem 1.375rem',
        right: '1.375rem 0px 1.375rem 1.375rem',
      },
    },
  },
  mode: 'jit',
  plugins: [],
} satisfies Config
