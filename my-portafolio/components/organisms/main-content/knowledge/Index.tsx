import React from 'react'
import Banner from '@/components/molecules/main-content/banners/Index'
import Grid from '@/components/molecules/main-content/boxes-grid/grid/Index'

const Index = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <Banner title='My Knowledge' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'/>
            <Grid />
        </div>
    </div>
  )
}

export default Index