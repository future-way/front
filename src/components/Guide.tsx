interface buttonType {
  text1: string
  text2?: string
}

const Guide = ({ text1, text2 }: buttonType) => {
  return (
    <p className="text-slg text-gray1 text-center">
      {text1}
      <span className="block">{text2}</span>
    </p>
  )
}

export default Guide
