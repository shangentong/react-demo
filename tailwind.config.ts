/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // colors: {
            //     //将 colors 类名替换为你的颜色
            //     primary: "#1677ff",
            // },
            // zIndex: {
            //     //在zindex当中添加你的自定义类名z-1
            //     "-1": "-1",
            // },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,  // 禁止 tailwindcss 的默认属性
    },
}