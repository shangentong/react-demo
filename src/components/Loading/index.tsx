import { Spin } from 'antd'
import styles from './index.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Loading = ({ show = true }: { show?: boolean },{ tip = 'Loading' }: { tip?: string }) => {
    // console.log(show);
//   return <Spin tip={tip} size="large" className="request-loading" />
  return show?<div id={styles.loading}><Spin size="large" className={styles.request_loading} /></div>:<></>
}

export default Loading
