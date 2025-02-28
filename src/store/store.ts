import { resultType } from '@/lib/api'
import { create } from 'zustand'

interface UserInfo {
  name: string
  setUserName: (name: string) => void
}

export const useNameStore = create<UserInfo>((set) => ({
  name: '',
  userId: null,
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

interface progressBar {
  progressNum: number
  setProgressBar: (progressNum: number) => void
}

export const progressBarStore = create<progressBar>((set) => ({
  progressNum: 0,
  setProgressBar: (progressNum) => {
    set((state) => ({ progressNum }))
  },
}))

interface Result {
  loading: boolean
  result: resultType
  status: number
  setLoading: (loading: boolean) => void
  setResult: (result: resultType, status: number) => void
}

export const resultStore = create<Result>((set) => ({
  result: {} as resultType,
  status: 0,
  loading: false,
  setLoading: (loading) => {
    set((state) => ({ loading }))
  },
  setResult: (result, status) => {
    set((state) => ({ result, status }))
  },
}))
