import React from 'react'

const Index = ({detail}:{detail:string}) => {
  return (
    <div className='flex flex-col text-start'>
        <p>{detail}</p>
    </div>
  )
}

export default Index