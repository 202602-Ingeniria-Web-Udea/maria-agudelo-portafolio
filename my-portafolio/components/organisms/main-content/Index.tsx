import React from 'react'
import Hero from '@/components/organisms/main-content/hero/Index'
import Education from '@/components/organisms/main-content/education/Index'
import Knowledge from '@/components/organisms/main-content/knowledge/Index'
import Portfolio from '@/components/organisms/main-content/portfolio/Index'

const Index = () => {
  return (
    <div className='flex flex-col gap-15'>
        <div> 
            <Hero />
            <Knowledge />
            <Education />
            <Portfolio />
        </div>
    </div>
  )
}

export default Index