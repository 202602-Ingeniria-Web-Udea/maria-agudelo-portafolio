import React from 'react'
import Hero from '@/components/molecules/main-content/hero/Index'
import Banner from '@/components/molecules/main-content/banners/Index'
import Grid from '@/components/molecules/main-content/boxes/Index'

const Index = () => {
  return (
    <div className='flex flex-col gap-15'>
        <div className='flex flex-row justify-around items-center w-250 h-117 bg-white relative overflow-hidden gap-5'> 
            <div className='p-15 pr-0 w-[60%] z-10'>
                <Hero />
            </div>
            <div className='h-full flex items-end justify-end w-[40%] pr-15 pt-6'>
                <img src='/no-bg.png' alt='hero' className='max-h-full w-auto object-cotain object-bottom'/>
            </div>
        </div>
        <div className='flex flex-col gap-15'>
            <Banner title='My Knowledge' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'/>
            <Grid />
        </div>
        <div>
            <Banner title='Education' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum' />
        </div>
    </div>
  )
}

export default Index