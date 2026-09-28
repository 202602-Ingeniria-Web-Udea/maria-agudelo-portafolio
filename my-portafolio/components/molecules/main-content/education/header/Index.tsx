import React from 'react'
interface Information {
    title: string,
    subtitle: string,
    date: string,
}

const Index = ({title, subtitle, date}:Information) => {
  return (
    <div className='flex flex-col gap-2 text-start'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p className='text-button font-bold'>{date}</p>
    </div>
  )
}

export default Index