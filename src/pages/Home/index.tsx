import React from 'react'
import Peoples from '../../components/Dashboard/Peoples'
import Quote from '../../components/Dashboard/Quote'
import { Scores } from '../../components/Dashboard/Scores'
import { TabBoxes } from '../../components/Dashboard/TabBoxes'
import Tips from '../../components/Dashboard/Tips'

const Home = () => {
  return (
    <div>
      <div className='flex gap-3 flex-col lg:flex-row'>
        <div className='basis-3/4'>
          <Quote />
        </div>
        <div className='basis-1/4'>
          <Tips />
        </div>
      </div>
      <div className='flex gap-3 flex-col lg:flex-row mt-2'>
        <div className='flex flex-col lg:flex-row rounded shadow basis-3/4'>
          <Peoples />
        </div>
        <div className='basis-1/4'>
          <Scores />
        </div>
      </div>
      <div className='flex-col lg:flex-row mt-2'>
          <TabBoxes />
      </div>
    </div>
  )
}

export default Home