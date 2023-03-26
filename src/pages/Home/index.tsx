import React from 'react'
import Detail from '../../components/Dashboard/Detail'
import Peoples from '../../components/Dashboard/Peoples'
import Quote from '../../components/Dashboard/Quote'
import { Scores } from '../../components/Dashboard/Scores'
import { TabBoxes } from '../../components/Dashboard/TabBoxes'
import { Table } from '../../components/Dashboard/Table'
import Tips from '../../components/Dashboard/Tips'

const Home = () => {
  return (
    <div>
      <div className='flex gap-3 flex-col xl:flex-row'>
        <div className='basis-3/4 flex flex-col gap-3'>
          <div className='min-h-[180px]'>
            <Quote />
          </div>
          <div className='min-h-[180px]'>
            <Peoples />
          </div>
        </div>
        <div className='basis-1/4 flex flex-row xl:flex-col gap-3'>
          <div className='flex-grow min-h-[180px]'>
            <Tips />
          </div>
          <div className='flex-grow min-h-[180px]'>
            <Scores />
          </div>
        </div>
      </div>
      <div className='bg-white p-5 h-full rounded shadow-sm mt-2'>
          <TabBoxes />
          <Table />
          {/* <ScatterPlot/> */}
      </div>

    </div>
  )
}

export default Home