import Image from 'next/image'

interface AIProfileProps {
  className?: string
}

const AIProfile = ({ className = '' }: AIProfileProps) => {
  return (
    <div className={`${className} inline-flex items-center gap-2`}>
      {/* <img className="h-auto w-10" src="/images/img22.png" alt="" /> */}
      <Image
        className="!static !w-auto"
        src="/images/img22.png"
        alt="모모 얼굴"
        priority
        fill
        style={{ objectFit: 'contain' }}
      />
      <p className="font-pretendardSemiBold text-m text-black">모모</p>
    </div>
  )
}

export default AIProfile
