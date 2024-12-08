import { createServer, fetchServers, ServerType } from '@/lib/temp_api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// useFetchServers custom hook
const useFetchServers = (token: string | null) => {
  return useQuery({
    queryKey: ['servers'],
    queryFn: () => {
      if (token === null) {
        return Promise.reject(new Error('Token is null'))
      }
      return fetchServers(token)
    },
  })
}

export const useCreateServer = (token: string | null) => {
  const queryClient = useQueryClient()

  return useMutation<ServerType, Error, ServerType>({
    mutationFn: (newServer: ServerType) => createServer(token!, newServer),
    // 데이터가 성공적으로 생성되면 쿼리는 무효화해 최신 데이터를 가져오는 로직
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['servers'] })
    },
  })
}

export default useFetchServers
/*
    const { data } = useFetchServers(token);

    const handleCreateServer = () => {
    createServerMutation.mutate({
        serverName: "mutation test",
        userId: "2",
        theme: null,
        categories: null,
    });
    };

위와 같은 방식으로 컴포넌트에서 사용
*/
