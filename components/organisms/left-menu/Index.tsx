import React from 'react'
import Profile from '@/components/molecules/left-menu/profile/Index'
import About from '@/components/molecules/left-menu/about/Index'
import Languages from '@/components/molecules/left-menu/languages/Index'
import SoftSkills from '@/components/molecules/left-menu/skills/Index'

const Index = () => {
  return (
    <div className='flex w-full flex-col items-center gap-5 bg-white lg:w-76.25'>
        <Profile />
        <About />
        <Languages title='Languages'/>
        <Languages title='Programming Languages' />
        <SoftSkills />
    </div>
  )
}

export default Index