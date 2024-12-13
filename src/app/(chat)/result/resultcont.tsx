'use client'

import Button from '@/components/Button'
import Card from './card'
import Summary from './summary'
import Loading from '@/components/loading/loading'
import { useEffect, useState } from 'react'
import { useNameStore } from '@/store/store'
import Popup from '@/components/popup'
import { useRouter } from 'next/navigation'
import { API_URL, resultType } from '@/lib/api'
import axios, {
  AxiosError,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

const ResultCont = () => {
  const { name, userId } = useNameStore()
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isRestart, setRestart] = useState(false)

  const postData = {
    userId,
  }

  const getData = async () => {
    setLoading(true)

    const config: AxiosRequestConfig = {
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        if (progressEvent.total) {
          const percent = Math.floor(
            (progressEvent.loaded / progressEvent.total) * 100,
          )
          setProgress(percent) // 진행 상황 업데이트
        }
      },
    }

    try {
      const response: AxiosResponse<resultType> = await axios.post(
        `${API_URL}/api/gemini/summary`,
        postData, // POST로 전송할 데이터
        config, // 요청 설정
      )
      console.log(response.data) // API 응답
    } catch (error: AxiosError | any) {
      console.error('API 호출 오류:', error.message)
    } finally {
      setLoading(false) // 로딩 완료
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (isRestart) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }

    // 컴포넌트가 언마운트될 때 원래 상태로 복원
    return () => {
      document.body.style.overflowY = ''
    }
  }, [isRestart])

  const onCancel = () => {
    setRestart(false)
  }

  const onReStart = () => {
    router.push('/choice')
  }

  return (
    <>
      {loading ? (
        <Loading
          progress={progress}
          title1={`${name}님을 위한`}
          title2="상담카드를 만들고 있어요"
          guide1={`오늘 상담이 ${name}님의`}
          guide2="내일찾기에 도움이 됐길 바라요!"
        />
      ) : (
        <>
          {isRestart && (
            <Popup
              title1="처음부터 다시하면"
              title2="모든 상담 내용이 사라져요"
              guide1="진로 성향부터 다시 알아볼까요?"
              buttonName1="취소"
              buttonName2="다시하기"
              onclick1={onCancel}
              onclick2={onReStart}
            />
          )}
          <div className="flex flex-col bg-black text-center">
            <header>
              <h1 className="relative py-3 text-base text-white">상담카드</h1>
            </header>
            <div>
              <Card />
              <Summary />
              <div className="mb-8 px-5">
                <Button
                  text="처음부터 다시하기"
                  onclick={() => setRestart((prev) => !prev)}
                  className="bg-orange1 py-4 text-white"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ResultCont
