import React from 'react'
import { SocialIcons } from '@/utils/data'
import SocialButton from '@/components/atoms/buttons/social-media/Index'

const Index = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h3> Links </h3>
      {SocialIcons.map((icon) => (
        <SocialButton key={icon.name} icon={icon.icon} link={icon.link} />
      ))}
    </div>
  )
}

export default Index