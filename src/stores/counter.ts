/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand'
import {devtools, persist, createJSONStorage } from 'zustand/middleware'

interface CounterState {
  counter: number
  delcounter: number
  increase: (val: number) => void
  decrease: (val: number) => void
  reset: () => void
}

type State = {
    counter: number
    delcounter: number
}


// define the initial state
const initialState: State = {
    counter: 0,
    delcounter: 10,
}

// const useCounterStore = create<CounterState>()((set) => ({
//   counter: 0,
//   delcounter: 10,
//   increase: (by) => set((state) => ({ counter: state.counter + by })),
//   decrease: (by) => set((state) => ({ delcounter: state.delcounter - by }))
// }))

const useCounterStore = create<CounterState>()(
    devtools(
        persist(
            (set) => ({
                ...initialState,
                increase: (val) => set((state) => ({ counter: state.counter + val })),
                decrease: (val) => set((state) => ({ delcounter: state.delcounter - val })),
                reset: ()=>{
                    console.log('reset');
                    set(initialState)
                }
            }),
            {
                name: 'counter',
                // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
                 // partialize 过滤属性，存储哪些字段到localStorage
                // partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => ['counter'].includes(key))),
            },
        ),
        {name:'counter'}
    )
)

export default useCounterStore

