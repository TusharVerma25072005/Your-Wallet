/** @type {import('tailwindcss').Config} */
const config = require('@repo/config/tailwindConfig');

module.exports = {
  ...config,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}'
  ],
}
