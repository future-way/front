interface AIProfileProps {
  className?: string
}

const AIProfile = ({ className = '' }: AIProfileProps) => {
  return (
    <div className={`${className} inline-flex items-center gap-2`}>
      <img className="h-auto w-10" src="/images/img22.png" alt="" />
      <p className="font-pretendardSemiBold text-m text-black">모모</p>
    </div>
  )
}

export default AIProfile
