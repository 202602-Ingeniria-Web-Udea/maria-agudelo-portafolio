import React from 'react'
import { SoftSkills } from '@/utils/data'
import Skill from '@/components/molecules/left-menu/skill-title/Index'

const Index = () => {
  return (
    <div className='w-56 flex flex-col justify-center gap-2'>
      <h3>Soft Skills</h3>
        {SoftSkills.map((item) => (
        <Skill key={item.skill} skill={item.skill}/>
      ))}
      <hr className="border-t border-gray-200 my-2" />
    </div>
  )
}

export default Index