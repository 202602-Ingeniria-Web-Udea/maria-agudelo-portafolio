import React from 'react'
import Hero from '@/components/molecules/main-content/hero/Index'
import Banner from '@/components/molecules/main-content/banners/Index'
import Grid from '@/components/molecules/main-content/boxes-grid/grid/Index'
import Education from '@/components/molecules/main-content/education/box/Index'

const Index = () => {
  return (
    <div className='flex flex-col gap-15'>
        <div className='relative flex h-auto w-full flex-col items-center justify-around gap-5 overflow-hidden bg-white lg:h-117 lg:w-250 lg:flex-row'> 
          <div className='z-10 w-full p-6 lg:w-[60%] lg:p-15 lg:pr-0'>
                <Hero />
            </div>
          <div className='flex h-64 w-full items-center justify-center lg:h-full lg:w-[40%] lg:items-end lg:justify-end lg:pr-15 lg:pt-6'>
            <img src='/no-bg.png' alt='hero' className='max-h-full max-w-full w-auto object-contain object-bottom'/>
            </div>
        </div>
    </div>
  )
}

export default Index