import React from 'react'
import Detail from '@/components/molecules/main-content/portfolio/detail/Index'
import { Portfolio } from '@/utils/data'

const Index = () => {
  return (
    <div>
        {Portfolio.map((item) => (
            <div key={item.title} className='bg-white p-15'>
                <img src={item.image?item.image:'/github.png'}/>
                <Detail name={item.title} description={item.description}/>
            </div>
        ))}
    </div>
  )
}

export default Index