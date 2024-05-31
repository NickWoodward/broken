import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	mode: 'jit',
	theme: {
		screens: {
      xxs: '400px',
      xs: '480px',
      sm: '768px',
      md: '950px',
      lg: '1150px',
      xl: '1440px',
      '2xl': '2000px',
      "xs-v": {raw: '(max-height: 720px)'},   
      "xxs-v": {raw: '(max-height: 620px)'},    
      "xxxs-v": {raw: '(max-height: 550px)'},

    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: "40px",
        "title-lg": "55px",
        "2.5xl": "28px",
      },
      colors: {
        primary: 'var(--primary)',
        primaryDark: 'var(--primary-dark)',
        primaryLight: 'var(--primary-light)',
        primaryVLight: 'hsla(178, 61%, 95%, 1)',
        secondary: 'var(--secondary)',
        tertiary: 'hsl(193, 26% 93%)',
        error:'firebrick',
        input: "var(--input-text)",

        textPrimary: 'var(--primary)',
        textPrimaryDark: 'var(--primary)',
        textDark: 'var(--text-dark)'
				
      },
      gridTemplateColumns: {
        "content-xxs": '1.5rem 1fr 1.5rem',
        "content-xs": '2rem 1fr 2rem',
        "content-sm": '4rem 1fr 4rem',
        "content-md": '6rem 1fr 6rem',
        "content-lg": '6rem 1fr 1fr',
        "content-xl": '2fr 7fr 7fr',
      },
      height: {
        header: 'var(--header-height)',
        dvh: 'var(--dvh)',
        // section: 'var(--hero-height)'
      },
      minHeight: {
        section: 'var(--hero-height)'
      },
      padding: {
        sm: '1.5rem',
        md: '2rem',
        lg: '4rem',
        "section-sm": '5rem',
        "section-md": "8rem",
        "section-lg": "12rem",
        "header": "var(--header-height)",
      },
      margin: {
        headerHeight: 'var(--header-height)',
        sm: '1rem',
        md: '1.5rem',
        lg: '4rem',
      },
      width: {
        login: '28rem'
      },
      maxWidth: {
        largest: '1700px',
        header: '1600px',
        content: '1400px',
        footer: '1400px',
        paragraph: '600px',
      },
      inset: {
        header: 'var(--header-height)'
      },
      scale: {
        '-100': '-1',
      },
      scrollPadding: {
        'header': 'var(--header-height)',
      },
      scrollMargin: {
        header: 'var(--header-height)',
        small: 'calc(var(--header-height)*.75)'
      }
    },
	},
	plugins: [],
}
