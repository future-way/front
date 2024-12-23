import Button from './Button'

interface PopupProps {
  title1: string
  title2: string
  guide1: string
  guide2?: string
  buttonName1: string
  buttonName2: string
  onclick1: () => void
  onclick2: () => void
}

const Popup = ({
  title1,
  title2,
  guide1,
  buttonName1,
  buttonName2,
  onclick1,
  onclick2,
  guide2 = '',
}: PopupProps) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-dvh w-full items-center justify-center bg-black bg-opacity-50">
      <div className="mx-8 w-full rounded-2xl bg-white p-4 pt-7">
        <h3 className="text-center font-pretendardBold text-xl font-bold text-black">
          {title1}
          <span className="block">{title2}</span>
        </h3>
        <p className="mb-6 mt-3 text-center text-slg text-gray1">
          {guide1}
          <span>{guide2}</span>
        </p>
        <div className="flex gap-2">
          <Button
            className="rounded-2xl bg-gray6 py-3.5 text-slg text-gray1"
            text={buttonName1}
            onclick={onclick1}
            isRounded
          />
          <Button
            className="rounded-2xl bg-black py-3.5 text-slg text-white"
            text={buttonName2}
            onclick={onclick2}
            isRounded
          />
        </div>
      </div>
    </div>
  )
}

export default Popup
