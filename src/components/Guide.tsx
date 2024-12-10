interface guideType {
  text1: string
  text2?: string
  className?: string
}

const Guide = ({ text1, text2, className }: guideType) => {
  return (
    <p className={`text-center text-slg text-gray1 ${className}`}>
      {text1}
      <span className="block">{text2}</span>
    </p>
  )
}

export default Guide
