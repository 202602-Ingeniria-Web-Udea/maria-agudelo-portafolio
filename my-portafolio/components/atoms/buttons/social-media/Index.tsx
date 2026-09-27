import React from 'react'
import { Icon } from '@iconify/react'

const Index = ({icon, link}:{icon:string, link:string}) => {
  return (
    <button className='h-12 w-12 rounded-full bg-button hover:bg-button-hover cursor-pointer'>
        <div className='flex flex-row items-center justify-center'>
            <Icon icon={icon} className='h-7 w-7 text-white'/>
        </div>
    </button>
  )
}

export default Index