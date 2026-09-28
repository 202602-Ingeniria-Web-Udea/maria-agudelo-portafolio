import React from 'react'
import ButtonHire from '@/components/atoms/buttons/hire-me/Index'

const Index = () => {
  return (
    <div className='flex flex-col items-start gap-6'>
        <h1 className='text-[32px] lg:text-[48px]'>
            I&apos;m Maria Agudelo
            <div className='text-button'>Software Engineering Student</div>
        </h1>
        <p>
            8th-semester Systems Engineering student specializing in Data Engineering and Quality Assurance (QA). Experienced in designing data pipelines, writing SQL queries, and implementing automated testing frameworks to ensure software reliability and data integrity. Passionate about data-driven decision making and building bug-free, scalable applications.
        </p>
        <ButtonHire />
    </div>
  )
}

export default Index