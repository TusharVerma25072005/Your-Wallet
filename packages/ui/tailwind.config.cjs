/** @type {import('tailwindcss').Config} */

const config = require('../tailwind-config/tailwind.config.cjs');

module.exports = {
    ...config,
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/*.{js,ts,jsx,tsx}'
    ]  
}