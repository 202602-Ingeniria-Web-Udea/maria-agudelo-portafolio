import React from 'react'
import LearnMore from '@/components/atoms/learn-more/Index'

const Index = ({name, description}:{name: string, description: string}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <LearnMore />
    </div>
  )
}

export default Index