/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'
import useGlobalStore from './stores/global'
import zhCN from 'antd/locale/zh_CN'

// function App() {
//   // const [count, setCount] = useState(0)

//   return <RouterProvider router={router} />
// }

const App: React.FC = () => {
    const { primaryColor } = useGlobalStore()
    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                token: {
                    // Seed Token，影响范围大
                    // colorPrimary: primaryColor,
                    // borderRadius: 2,
                    // // 派生变量，影响范围小
                    // colorBgContainer: '#f6ffed',
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>

    )
}

export default App
