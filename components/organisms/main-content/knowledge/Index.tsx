import React from 'react'
import Banner from '@/components/molecules/main-content/banners/Index'
import Grid from '@/components/molecules/main-content/boxes-grid/grid/Index'

const Index = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <Banner title='My Knowledge' description='A comprehensive look at my core technical stack, combining robust data architecture with rigorous software testing methodologies developed through academic projects and hands-on practice.'/>
            <Grid />
        </div>
    </div>
  )
}

export default Index