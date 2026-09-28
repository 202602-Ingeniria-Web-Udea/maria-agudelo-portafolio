import React from 'react'
import { Icon } from '@iconify/react';

const Index = ({text = 'HIRE ME', icon='akar-icons:arrow-right', link}:{text?: string, icon?: string, link:string}) => {
  return (
    <a href={link} className='flex items-center h-12 px-8 bg-button text-white rounded-xl cursor-pointer hover:bg-button-hover transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <div className='flex flex-row justify-center items-center gap-3 text-xl'>
            {text}
            {icon && <Icon icon={icon} className='h-6 w-6' />}
        </div>
    </a>
  )
}

export default Index