import React from 'react'
import { Languages, ProgrammingLanguages} from '@/utils/data'
import Titles from '@/components/atoms/left-menu/two-col-titles/Index'
import ProgressBar from '@/components/atoms/left-menu/progress-bar/Index'

const Data = {
    Languages,
    ProgrammingLanguages,
}

const Index = ({title}:{title:string}) => {
    const formattedKey = title.replaceAll(' ', '') as keyof typeof Data;
    const listToLoad = Data[formattedKey] || [];
  return (
    <div className='w-56 flex flex-col justify-center gap-2'>
        <h3>{title}</h3>
        {listToLoad.map((item) => (
        <div key={item.language}>
            <Titles leftText={item.language} rightText={item.percentage} />
            <ProgressBar percentage={item.percentage} />
        </div>
      ))}
      <hr className="border-t border-gray-200 my-2" />
    </div>
  )
}

export default Index