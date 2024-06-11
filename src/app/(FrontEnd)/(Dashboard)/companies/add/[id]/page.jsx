import CeoForm from '@/components/Forms/CeoForm'
import React from 'react'


const page = ({params}) => {
  const {id}=params
  return (
    <>
      <CeoForm ID={id}/>
    </>
  )
}

export default page