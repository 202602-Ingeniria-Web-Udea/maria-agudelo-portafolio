import React from 'react'
import { Knowledge } from '@/utils/data'
import Box from '@/components/atoms/main-content/boxes/Index'

const Index = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {Knowledge.map((item) => (
            <Box key={item.title} icon={item.icon} title={item.title} description={item.description}/>
        ))}
    </div>
  )
}

export default Index