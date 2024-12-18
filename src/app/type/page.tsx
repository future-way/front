import TypeContent from './typecontent'
import { SelectedTypeProps } from './selectedtype'
import { userTypes } from '@/constants'

type queryParams = Promise<{ id: string }>

const page = async ({ searchParams }: { searchParams: queryParams }) => {
  const { id } = await searchParams

  if (!id || !['one', 'two', 'three', 'four'].includes(id)) {
    return <div>잘못된 접근입니다.</div>
  }
  const seletedType: SelectedTypeProps =
    userTypes[id as 'one' | 'two' | 'three' | 'four']
  return (
    <>
      <TypeContent type={seletedType}></TypeContent>
    </>
  )
}

export default page
