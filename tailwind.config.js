module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'apFont': ['"Inter"', 'sans-serif']
      }
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-scrollbar-hide'),
    require('tw-elements/dist/plugin'),
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut', 'animate__fadeInUp'],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
