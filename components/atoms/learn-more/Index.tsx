import React from 'react'
import { Icon } from '@iconify/react'

const Index = ({link}:{link:string}) => {
  return (
    <div className='flex flex-row text-button items-center justify-start hover:text-button-hover'>
        <a className='text-button' href={link}>Learn More</a>
        <Icon icon='akar-icons:chevron-right'/>
    </div>
  )
}

export default Index