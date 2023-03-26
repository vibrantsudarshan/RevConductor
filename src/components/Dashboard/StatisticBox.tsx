import React from 'react'

export const StatisticBox = () => {
    return (
        <div className='flex flex-grow flex-row bg-white rounded shadow-sm p-5 justify-between'>
            <div className='divide-y-2 divide-gray-300'>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Debid Duration</p>
                    <p className='text-gray'>90 Days</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Justfication</p>
                    <p className=''>Design Target</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Competitor</p>
                    <p className=''>STM</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Competitor's Price</p>
                    <p className=''>%5.05</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>No Bid</p>
                    <p className=''>Special Buy</p>
                </div>
            </div>
            <div className='divide-y-2 divide-gray-300'>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Product Family</p>
                    <p className=''>32-bit MCU</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Product Status</p>
                    <p className=''>No New Designs</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Product Note</p>
                    <p className=''>Automotive</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Lead Time</p>
                    <p className=''>16wks</p>
                </div>
                <div className='flex flex-row items-center gap-10 justify-between'>
                    <p className='text-sm'>Disti On Hand</p>
                    <p className=''>35 wks</p>
                </div>
            </div>
        </div>
    )
}
