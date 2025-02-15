import type { Config } from 'tailwindcss'

export default {
  content: ['popup.tsx', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      tsu: {
        base: 'hsl(var(--base))',
        'base-foreground': 'hsl(var(--base-foreground))',

        surface: 'hsl(var(--surface))',
        'surface-foreground': 'hsl(var(--surface-foreground))',

        overlay: 'hsl(var(--overlay))',
        'overlay-foreground': 'hsl(var(--overlay-foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        subtle: 'hsl(var(--subtle))',
        'subtle-foreground': 'hsl(var(--subtle-foreground))',

        text: 'hsl(var(--text))',
        'text-foreground': 'hsl(var(--text-foreground))',

        love: 'hsl(var(--love))',
        'love-foreground': 'hsl(var(--love-foreground))',

        gold: 'hsl(var(--gold))',
        'gold-foreground': 'hsl(var(--gold-foreground))',

        rose: 'hsl(var(--rose))',
        'rose-foreground': 'hsl(var(--rose-foreground))',

        pine: 'hsl(var(--pine))',
        'pine-foreground': 'hsl(var(--pine-foreground))',

        foam: 'hsl(var(--foam))',
        'foam-foreground': 'hsl(var(--foam-foreground))',

        iris: 'hsl(var(--iris))',
        'iris-foreground': 'hsl(var(--iris-foreground))',

        hlow: 'hsl(var(--highlight-low))',
        'hlow-foreground': 'hsl(var(--highlight-low-foreground))',

        hmed: 'hsl(var(--highlight-med))',
        'hmed-foreground': 'hsl(var(--highlight-med-foreground))',

        hhigh: 'hsl(var(--highlight-high))',
        'hhigh-foreground': 'hsl(var(--highlight-high-foreground))'
      }
    }
  },
  plugins: []
} satisfies Config
