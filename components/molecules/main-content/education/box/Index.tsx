import React from 'react'
import Detail from '@/components/molecules/main-content/education/detail/Index'
import Header from '@/components/molecules/main-content/education/header/Index'
import { Education } from '@/utils/data'

const Index = () => {
  return (
    <div className='bg-white gap-3'>
        {Education.map((item) => (
            <div key={item.institution} className='flex flex-col items-start p-6 lg:flex-row lg:items-center lg:p-15'>
                <div className='w-full lg:w-[40%]'>
                  <Header title={item.institution} subtitle={item.degree} date={item.date}/>
                </div>
                <div className='w-full lg:w-[60%]'>
                  <Detail detail={item.detail}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Index