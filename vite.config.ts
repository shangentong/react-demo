
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
  console.log('env==',env,env.VITE_API_URL as string);

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
    server: {
      port: 3006, // 开发环境启动的端口
      host: '0.0.0.0',
      open: true, // 项目启动时自动打开浏览器
      proxy: {
        '/api': {
          target: env.VITE_API_URL as string, // 当遇到 /api 路径时
          changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
          // 一般情况下，配置上面两个即可
          secure: false,      // 如果是 https 接口，需要配置这个参数
          rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
        },
      }
    },
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
