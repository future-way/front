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
        deactivaction: '#E4E7ED',
        gray1: '#667277',
        gray2: '#E5E8EB',
        gray3: '#D9DCE2',
        gray4: '#BEC5CF',
        gray5: '#F5F6F7',
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
  mode: 'jit',
  plugins: [],
} satisfies Config
