import { createTrackedSelector } from 'react-tracked'
import { immer } from 'zustand/middleware/immer'
import { createWithEqualityFn } from 'zustand/traditional'

export interface CounterStore {
  count: number
  map: Record<string, { name: string, val: number[] }>
  increment: () => void
  decrement: () => void
  changeTest2Val: () => void
}

const selector=immer<CounterStore>((set) => ({
  count: 0,
  map:{
    'test1': {
      name: 'test',
      val:[]
    },
    'test2': {
      name: 'test2',
      val:[]
    }
  },
  changeTest2Val: () =>{
    set((state) => {
      state.map.test2.val.push(Math.random())
    })
  },
  increment: () =>{
    set((state) => {
      state.count+=1
    })
    
  },
  decrement: () => {
    set((state) => {
      state.count-=1
    })
  },
}))

export const store = createWithEqualityFn(selector)

export const useTrackedStore=()=>{
  return createTrackedSelector(store)()
}