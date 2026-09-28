import React from 'react'

const Index = ({title, description}: {title: string, description: string}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 p-6 lg:p-15'>
        <h2>{title}</h2>
        <p className='max-w-110 text-center'>{description}</p>
    </div>
  )
}

export default Index