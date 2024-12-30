import Image from 'next/image'

interface TitleProps {
  text1: string
  text2?: string
  img: string
  alt?: string
  className?: string
  imgClassName?: string
}

const Title = ({
  text1,
  text2 = '',
  img,
  alt = '',
  className = '',
  imgClassName = '',
}: TitleProps) => {
  return (
    <section>
      {img && (
        <div className={`${imgClassName}`}>
          <Image
            className="!static w-full"
            src={img}
            alt={alt}
            priority
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
      <h2
        className={`mt-5 font-pretendardSemiBold text-2xl font-semibold text-black ${className}`}
      >
        {text1}
        <span className="block">{text2}</span>
      </h2>
    </section>
  )
}

export default Title
