import { create } from 'zustand'

interface UserInfo {
  name: string
  userId: number | null
  setUserName: (name: string) => void
  setuserId: (userId: number) => void
  resetUserId: () => void
}

export const useNameStore = create<UserInfo>((set) => ({
  name: '',
  userId: null,
  setUserName: (name) => {
    set((state) => ({ name }))
  },
  setuserId: (userId) => {
    set((state) => ({ userId }))
  },
  resetUserId: () => {
    set((state) => ({ userId: null }))
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
