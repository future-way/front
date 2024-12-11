import LoadingCont from './loadingcont'

export interface loadingTextType {
  title1: string
  title2: string
  guide1: string
  guide2: string
}

const Loading = ({ title1, title2, guide1, guide2 }: loadingTextType) => {
  return (
    <div className="flex h-screen flex-col text-center">
      <header className="h-10">
        <h1 className="text-base leading-10 text-gray1">내일찾기</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <LoadingCont
          title1={title1}
          title2={title2}
          guide1={guide1}
          guide2={guide2}
        ></LoadingCont>
      </main>
    </div>
  )
}

export default Loading
