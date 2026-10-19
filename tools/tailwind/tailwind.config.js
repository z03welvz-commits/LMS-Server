// Tailwind is scoped so it cannot restyle the rest of the app:
//  - every utility is prefixed  (tw-flex, tw-p-4 ...)
//  - every utility is scoped to #page-home (important selector strategy)
//  - preflight (the CSS reset) is OFF, the app has its own base styles
module.exports = {
  prefix: 'tw-',
  important: '#page-home',
  corePlugins: { preflight: false },
  content: ['../../index.html'],
  theme: {
    extend: {
      colors: {
        navy: '#1B3A6B',
        day: '#1D9E75',
        night: '#185FA5',
        ok:   { DEFAULT: '#0F6E56', bg: '#E1F5EE', tx: '#085041', line: '#9FDCC3' },
        warn: { DEFAULT: '#BA7517', bg: '#FAEEDA', tx: '#633806', line: '#EDBE8A' },
        bad:  { DEFAULT: '#A32D2D', bg: '#FCEBEB', tx: '#791F1F', line: '#F2B8B8' },
        info: { DEFAULT: '#185FA5', bg: '#E6F1FB', tx: '#0C447C', line: '#B5D4F4' },
      },
      boxShadow: {
        card: '0 2px 12px rgba(27,58,107,.07)',
        'card-hover': '0 6px 20px rgba(27,58,107,.13)',
      },
    },
  },
  plugins: [
    // Preflight is off, so buttons keep browser chrome. Opt in per button with tw-btn-reset.
    function ({ addUtilities }) {
      addUtilities({ '.btn-reset': { border: '0', fontFamily: 'inherit', cursor: 'pointer' } });
    },
  ],
};
