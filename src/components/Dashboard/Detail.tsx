import React from 'react'
import PropTypes from 'prop-types'

import { DoubleLineChart } from '../Chart/DoubleLineChart'
import { PriceTrendChart } from '../Chart/PriceTrendChart'
import { ScatterPlot } from '../Chart/ScatterPlot'
import { ChatBox } from './ChatBox'
import { StatisticBox } from './StatisticBox'

type DetailProps = {
    data: Object
}

const Detail = ({ data }: DetailProps) => {
  return (
    <div className='m-3 flex flex-col  gap-5 lg:flex-row '>
        <div className='flex flex-col gap-5 basis-1/2'>
            <div className=' flex flex-col lg:flex-row bg-white h-full w-full p-4 basis-1/2'>
                <ScatterPlot />
                <PriceTrendChart />
            </div>
            <div className='flex flex-grow h-full w-full basis-1/2'>
                <StatisticBox />
            </div>
        </div>
        <div className='flex flex-col gap-5 basis-1/2'>
            <div className='flex flex-grow bg-white h-full w-full p-4 basis-1/5'>
                <DoubleLineChart />
            </div>
            <div className='basis-5/6'>
                <ChatBox />
            </div>
        </div>
    </div>
  )
}

Detail.propTypes = {
    data: PropTypes.object.isRequired
}

export default Detail