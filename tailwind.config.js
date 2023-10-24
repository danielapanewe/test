/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
          colors: {
            textscolor: 'rgb(31,41,55)',
            secondarycolor: 'rgb(107,114,128)',
            // primarycolor: 'rgb(220,38,38)',
            primarydarkercolor: '#9a1b1b',
            primarycolor: '#e30612',
            // textcolor: '#0D1136',
            textcolor:'rgb(17 24 39 )'
        
        },
        },
    },
    plugins: [],
};
