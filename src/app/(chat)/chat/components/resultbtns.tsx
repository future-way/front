import Button from '@/components/Button'

interface ResultBtnsProps {
  isShowBtn: {
    close: boolean
    result: boolean
  }
  onMoveCounselPage: () => void
  onShowIsCounselResultBtn: () => void
  onOpenChat: () => void
}

const ResultBtns = ({
  isShowBtn,
  onMoveCounselPage,
  onShowIsCounselResultBtn,
  onOpenChat,
}: ResultBtnsProps) => {
  return (
    <section className="flex justify-center gap-2">
      {isShowBtn.result ? (
        <Button
          className="w-auto rounded-3xl bg-black px-5 py-2.5 text-slg text-white"
          text="나만의 상담카드 보러가기 👀"
          onclick={onMoveCounselPage}
          isRounded
        />
      ) : (
        <>
          <Button
            className="w-auto rounded-3xl bg-black px-5 py-2.5 text-slg text-white"
            onclick={onShowIsCounselResultBtn}
            text="괜찮아, 종료해줘"
            isRounded
          />
          <Button
            onclick={onOpenChat}
            className="w-auto rounded-3xl bg-black px-5 py-2.5 text-slg text-white"
            text="상담 계속할게"
            isRounded
          />
        </>
      )}
    </section>
  )
}

export default ResultBtns
