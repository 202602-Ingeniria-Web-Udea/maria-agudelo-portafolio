import React from 'react'
import Banner from '@/components/molecules/main-content/banners/Index'
import Carousel from '@/components/molecules/main-content/portfolio/carousel/Index'

const Index = () => {
  return (
    <div className='flex flex-col gap-15'>
        <div>
            <Banner title='Portfolio' description='A showcase of academic, personal, and practical projects demonstrating my problem-solving skills across software engineering, data analysis, and quality assurance. This collection highlights my ability to build functional web applications, design efficient databases, write clean code, and deliver reliable technical solutions from concept to deployment.' />
            <Carousel />
        </div>
    </div>
  )
}

export default Index