interface titleType {
  text1: string
  text2?: string
  img: string
  className?: string
  imgClassName?: string
}

const TItle = ({
  text1,
  text2,
  img,
  className = '',
  imgClassName = '',
}: titleType) => {
  return (
    <>
      {img && (
        <div className={`${imgClassName}`}>
          <img className="m-auto" src={img} alt="" />
        </div>
      )}
      <h2
        className={`mt-5 font-pretendardSemiBold text-2xl font-semibold text-black ${className}`}
      >
        {text1}
        <span className="block">{text2}</span>
      </h2>
    </>
  )
}

export default TItle
