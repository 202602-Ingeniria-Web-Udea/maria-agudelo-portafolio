import React from 'react'
import { About } from '@/utils/data'
import Titles from '@/components/atoms/left-menu/two-col-titles/Index'

const Index = () => {
  return (
    <div className='w-56 flex flex-col justify-center gap-2'>
        {About.map((text) => (
        <Titles key={text.left} leftText={text.left} rightText={text.right} />
      ))}
      <hr className="border-t border-gray-200 my-2" />
    </div>
  )
}

export default Index