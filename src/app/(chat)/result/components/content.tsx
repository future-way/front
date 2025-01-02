import { getResultData } from '@/hook/useResult'
import { resultType } from '@/lib/api'
import Button from '@/components/Button'
import Card from './card'
import Summary from './summary'
import Header from './header'

interface ContentProps {
  result: resultType
  name: string
  onGoFirstStart: () => void
}

const Content = ({ result, name, onGoFirstStart }: ContentProps) => {
  const {
    summary,
    hollandDetail,
    hollandTypes: holland,
    userImgType,
    advice,
    way,
  } = getResultData(result)

  return (
    <>
      {result.summary && (
        <div className="flex flex-col bg-black text-center">
          <Header />
          <div>
            <Card userImgType={userImgType} holland={holland} name={name} />
            <Summary
              name={name}
              summary={summary}
              advice={advice}
              holland={hollandDetail}
              way={way}
            />
            <section className="mb-8 px-5">
              <Button
                text="처음부터 다시하기"
                onclick={onGoFirstStart}
                className="!rounded-2xl bg-orange1 py-4 text-white"
              />
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default Content
