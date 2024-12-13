import {
  postForResult,
  postUserName,
  postUserType,
  resultType,
  useSelectType,
  useType,
} from '@/lib/api'
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const userKey = 'userData'

export function usePostUser(): UseMutationResult<useType, AxiosError, string> {
  const queryClient = useQueryClient()
  return useMutation<useType, AxiosError, string>({
    mutationFn: postUserName,
    onSuccess: (data: useType) => {
      queryClient.setQueryData<useType>([userKey], data)
    },
    onError: (error: AxiosError) => {
      console.error(error)
    },
  })
}

export function useUserType(): UseMutationResult<
  useSelectType,
  AxiosError,
  useSelectType
> {
  const queryClient = useQueryClient()
  return useMutation<useSelectType, AxiosError, useSelectType>({
    mutationFn: postUserType,
    onSuccess: (data: useSelectType) => {
      queryClient.setQueryData<useSelectType>(['userType'], data)
    },
    onError: (error: AxiosError) => {
      console.error(error)
    },
  })
}
