import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeMathJAX from 'rehype-mathjax';

export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx({
      providerImportSource: '@mdx-js/react',
      rehypePlugins: [ rehypeHighlight, rehypeMathJAX ],
      remarkPlugins: [ remarkMath ],
    })},
    react(),
  ],
});
