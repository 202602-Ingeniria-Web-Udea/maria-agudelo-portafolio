import React from 'react'

const Index = ({leftText, rightText}:{leftText:string, rightText:string}) => {
  return (
    <div className='flex flex-row justify-between w-56'>
      <p className='flex flex-row text-left'>
        {leftText}:
      </p>
      <p className='flex flex-row text-right'>
        {rightText}
      </p>
    </div>
  )
}

export default Index