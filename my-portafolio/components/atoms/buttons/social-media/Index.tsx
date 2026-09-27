import React from 'react'
import { Icon } from '@iconify/react'

const Index = ({icon, link}:{icon:string, link:string}) => {
  return (
    <button className='h-10 w-10 rounded-full bg-button hover:bg-button-hover cursor-pointer'>
        <div className='flex flex-row items-center justify-center'>
            <Icon icon={icon} className='h-5 w-5 text-white'/>
        </div>
    </button>
  )
}

export default Index