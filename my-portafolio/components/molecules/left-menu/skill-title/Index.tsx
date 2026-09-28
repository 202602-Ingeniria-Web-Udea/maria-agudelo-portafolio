import React from 'react'
import { Icon } from '@iconify/react'

const Index = ({skill}:{skill:string}) => {
  return (
    <div className='flex flex-row text-left items-center gap-2'>
        <Icon icon='ic:baseline-model-training' className='text-button w-5 h-5'/>
        <p>{skill}</p>
    </div>
  )
}

export default Index