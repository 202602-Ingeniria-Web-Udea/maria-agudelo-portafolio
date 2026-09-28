import React from 'react'
import { Icon } from '@iconify/react'

interface Information {
    icon: string, 
    title: string, 
    description: string,
}

const Index = ({icon, title, description} : Information) => {
  return (
    <div className='bg-white flex flex-col gap-5 items-center justify-center p-10'>
        <Icon icon={icon} className='text-button h-16 w-16 stroke-3'/>
        <h3>{title}</h3>
        <p className='text-center'>{description}</p>
    </div>
  )
}

export default Index