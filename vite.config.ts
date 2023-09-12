
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'node:path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // @types/node
// import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const outDir:string = 'dist';
  // const APPNAME:string = loadEnv(mode, process.cwd()).VITE_APP;
  const env = loadEnv(mode, process.cwd());
  console.log('env==',env);
  
  // if (APPNAME === 'test') { // 测试环境
  //   outDir = 'test';
  // }else if (APPNAME === 'production') { // 生产环境
  //   outDir = 'pro';
  // }else {
  //   outDir = 'dist';
  // }

  return defineConfig({
    plugins: [
      react(),
      // viteCompression({
      //   threshold: 1024, // 对大于 1mb 的文件进行压缩
      // })
    ],
    build: {
      outDir: outDir,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    define: {
      'process.env': env
    },
  })
}
