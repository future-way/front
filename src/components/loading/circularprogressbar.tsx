'use client'

import { FC } from 'react'

interface Props {
  strokeWidth?: number
  sqSize?: number
  percentage: number
  img: string
}

const CircularProgressBar: FC<Props> = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage, img } = props
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100

  return (
    <svg className="m-auto" width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="fill-none stroke-gray-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-green transition-all delay-200 ease-in"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <image
        href={img}
        x={sqSize / 2 - 76 / 2} // 이미지의 x 좌표 중앙 정렬
        y={sqSize / 2 - 76 / 2} // 이미지의 y 좌표 중앙 정렬
        width={76}
        height={76}
      />
    </svg>
  )
}

export default CircularProgressBar
