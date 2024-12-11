'use client'

import SelectedType, { selectedType } from './selectedtype'
import LoadingType from './loading'
import { useEffect, useState } from 'react'

const TypeContent = ({ type }: { type: selectedType }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])
  return <>{active ? <SelectedType {...type} /> : <LoadingType />}</>
}

export default TypeContent
