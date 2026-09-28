import React from 'react'
import Banner from '@/components/molecules/main-content/banners/Index'
import Carousel from '@/components/molecules/main-content/portfolio/carousel/Index'

const Index = () => {
  return (
    <div className='flex flex-col gap-15'>
        <div>
            <Banner title='Portfolio' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum' />
            <Carousel />
        </div>
    </div>
  )
}

export default Index