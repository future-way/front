import Image from 'next/image'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

import Intro from './(intro)/page'

export default async function Home() {
  const queryClient = new QueryClient()

  // https://cwdeveloper.tistory.com/61 -> 리액트 쿼리 참고 사이트
  // await queryClient.prefetchQuery({
  //   queryKey: ["Intro"],
  //   queryFn: getPosts,
  // });

  // return (
  //   <HydrationBoundary state={dehydrate(queryClient)}>
  //     <Intro />
  //   </HydrationBoundary>

  // 다른 컴포넌트에서 사용법
  // const { data, error } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  // const clientValue = useQuery({ queryKey: ['poosts'], queryFn: getPosts });

  return <Intro />
}
