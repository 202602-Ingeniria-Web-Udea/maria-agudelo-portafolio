import React from 'react'
import Banner from '@/components/molecules/main-content/banners/Index'
import Education from '@/components/molecules/main-content/education/box/Index'

const Index = () => {
  return (
    <div className='flex flex-col'>
        <Banner title='Education' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum' />
        <Education />
    </div>
  )
}

export default Index