/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr'
import { httpClient } from './request'
// import { NewItem } from './interface'

export const postApi = (url: any, params: any) => {
    return httpClient.post(`api/${url}`, params)
}

export const getApi = (url: any) => {
    return httpClient.get(`api/${url}`)
}

export const useFetchHotNews = () => {
    const {data} = useSWR(`api/common/HotList`, (url) =>
      httpClient.get<{ list: any }>(url, {
        successCode: 200,
      })
    )

    // console.log(data);


    return data
  }
