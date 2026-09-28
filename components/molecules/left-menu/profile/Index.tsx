import React from 'react'
import Image from 'next/image'

const Index = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='pt-10'>
            <Image src='/profile.jpeg' alt='profile' height= '150' width='150' className='rounded-full' />
        </div>
        <div className='flex flex-col items-center py-5'>
            <h3>María De Los Ángeles Agudelo</h3>
            <p>Software Engineering Student</p>
        </div>
        <hr className="border-t border-gray-200 my-2" />
    </div>
  )
}

export default Index