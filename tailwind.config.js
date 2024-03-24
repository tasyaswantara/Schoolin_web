/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  variants: {
    display:['group-hover']
   },

  theme: {    
    extend: {
      backgroundImage: {
        home:"url('/src/assets/images/bg_homepage1.svg')",
        bgbg:' linear-gradient(0deg, #FFF 52.66%, rgba(255, 255, 255, 0.79) 73.67%, rgba(255, 255, 255, 0.00) 100%)',
        bg_blur:"url('/src/assets/images/bg_blur.png')",
        bg_listhitam:"url('/src/assets/images/bg_listhitam.svg')",
        bg_listputih:"url('/src/assets/images/bg_listputih.svg')",
        bg_review:"url('/src/assets/images/bg_review.svg')",

      },
      dropShadow: {
        nav: "0px 1.3333333730697632px 3.3333332538604736px rgba(0, 0, 0, 0.60)",
        title: "3px 3px 10px rgba(0, 0, 0, 0.30)",
        subtitle: "0px 1.564488172531128px 3.911220073699951px rgba(0, 0, 0, 0.60)",
        rev:"0px 4px 10px rgba(0, 0, 0, 0.80)",
      },
      boxShadow: {
        'home': '4px 4px 10px 0px rgba(0, 0, 0, 0.40)',
        'card-shadow': '3.65432px 3.65432px 9.1358px 0px rgba(0, 0, 0, 0.40)',
        'drop':'0px 4px 4px 0px rgba(0, 0, 0, 0.35)',
      },
      textshadow:{
        rev: '0px 4px 10px rgba(0, 0, 0, 0.80);'
      } 
    },
  },
  plugins: [],
}

