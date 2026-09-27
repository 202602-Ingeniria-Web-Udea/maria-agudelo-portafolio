import React from 'react'
import ButtonHire from '@/components/atoms/buttons/hire-me/Index'

const Index = () => {
  return (
    <div className='flex flex-col items-start gap-6'>
        <h1>
            I&apos;m Maria Agudelo
            <div className='text-button'>Software Engineering Student</div>
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium possimus error sed, omnis consequuntur eius delectus dolorum est at corrupti ipsa placeat nobis quo itaque dolore cum sint nisi molestiae.
        </p>
        <ButtonHire />
    </div>
  )
}

export default Index