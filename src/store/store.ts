import { create } from 'zustand'

// store의 타입을 정의해준다.
interface Name {
  name: string
  setUserName: (name: string) => void
}

export const useNameStore = create<Name>((set) => ({
  name: '',
  setUserName: (name) => {
    set((state) => ({ name }))
  },
}))

interface ChoiceNum {
  num: 0 | 1 | 2
  setChoiceNum: (name: 0 | 1 | 2) => void
}

export const choiceNumStore = create<ChoiceNum>((set) => ({
  num: 0,
  setChoiceNum: (num) => {
    set((state) => ({ num }))
  },
}))

interface YesOrNo {
  yesOrNo: -1 | 0 | 1
  setYesOrNo: (yesOrNo: -1 | 0 | 1) => void
}

export const yesOrNoStore = create<YesOrNo>((set) => ({
  yesOrNo: -1,
  setYesOrNo: (yesOrNo) => {
    set((state) => ({ yesOrNo }))
  },
}))
