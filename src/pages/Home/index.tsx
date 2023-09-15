/* eslint-disable @typescript-eslint/no-unused-vars */
import useCounterStore from '@/stores/counter'
import { Button, DatePicker, DatePickerProps } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { getApi ,postApi, useFetchHotNews} from '@/api'
import Loading from '@/components/Loading'


const NAVS = [
    { title: '知乎', id: 'zhihu' },
    { title: '微博', id: 'weibo' },
    { title: '微信', id: 'weixin' },
    { title: '百度', id: 'baidu' },
    { title: '抖音', id: 'douyin' },
    { title: 'B站', id: 'bilibili' },
    { title: '头条', id: 'toutiao' },
  ]
// import styles from './index.module.scss'
const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const delcounter = useCounterStore((state) => state.delcounter)
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  const reset = useCounterStore((state) => state.reset)

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

//   const [active, setActive] = useState(NAVS[0].id)

  const res= useFetchHotNews()
  console.log(res);

  const getdata = async () =>{
    console.log(111);
    // const params = {login:"tong",password:"123456"}
    // const res = await postApi('v3/login',params)
    // console.log(res);

    const res = await getApi('common/OneDayEnglish')
    console.log(res);

    // axios.post('https://posdev.apmgroup.net/api/v3/login', params)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // try {
    //     const response = await axios.get('https://api.oioweb.cn/api/common/OneDayEnglish');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }

    // axios.get('http://www.ggapi.cn/api/new/?type=douyin')
    // .then(function (response) {
    //     // 处理成功情况
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // 处理错误情况
    //     console.log(error);
    // })
    // .finally(function () {
    //     // 总是会执行
    // });
  }


  return (
    <div className='flex flex-col items-start'>
      {/* <div>zustand状态管理小练习</div> */}
      <h1 className='m-0 p-0'>home page</h1>
      {/* <Button type="primary" onClick={() => increase(1)} >increase:{counter}</Button> <br /> <br />
      <Button type="primary" onClick={() => decrease(1)}>decrease:{delcounter}</Button> <br /> <br />
      <Button type="primary" onClick={() => reset()}>reset</Button> */}
      <DatePicker onChange={onChange} />
      <Button type="primary" onClick={() => getdata()}>reset</Button>
      <Loading show={false}/>
    </div>
  )
}

export default Home
