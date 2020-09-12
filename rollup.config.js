import html from '@open-wc/rollup-plugin-html';

export default {
  input: 'book/index.html',
  output: { dir: 'dist' },
  plugins: [html()],
};
