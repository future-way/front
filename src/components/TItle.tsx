interface titleType {
  text1: string
  text2?: string
  img: string
  className?: string
}

const TItle = ({ text1, text2, img, className }: titleType) => {
  return (
    <>
      <div>
        <img src={img} alt="" />
      </div>
      <h2 className={`mt-5 font-pretendardSemiBold text-2xl ${className}`}>
        {text1}
        <span className="block">{text2}</span>
      </h2>
    </>
  )
}

export default TItle
