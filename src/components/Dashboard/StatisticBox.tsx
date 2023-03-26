import Checkbox from '@material-tailwind/react/components/Checkbox'
import React from 'react'

export const StatisticBox = () => {
    return (
        <div className='flex flex-row w-full bg-white rounded shadow-sm p-5 justify-between'>
            <div className='gap-5 flex flex-col grow px-4 divide-y-2'>
                <div className='flex flex-row items-center justify-between gap-10 h-6'>
                    <p className='text-sm'>Debid Duration</p>
                    <div className='text-gray bg-white rounded border-2'>90days</div>
                </div>
                <div className='flex flex-row items-center justify-between gap-10 h-6'>
                    <p className='text-sm'>Justfication</p>
                    <p className='text-sm font-normal'>Design Target</p>
                </div>
                <div className='flex flex-row items-center justify-between gap-10 h-6'>
                    <p className='text-sm'>Competitor</p>
                    <p className='text-smxs font-normal'>STM</p>
                </div>
                <div className='flex flex-row items-center justify-between gap-10 h-6'>
                    <p className='text-sm'>Competitor's Price</p>
                    <p className='text-sm font-normal'>$5.05</p>
                </div>
                <div className='flex flex-row items-center justify-between gap-10 h-6'>
                    <div className='flex flex-row items-center'>
                        <Checkbox key = 'bid' className='h-5 w-5' />
                        <p className='text-sm text-gray'>No Bid</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <Checkbox key = 'buy' className='h-5 w-5 ' />
                        <p className='text-sm text-gray'>Special Buy</p>
                    </div>

                </div>
            </div>
            <div className='gap-5 flex flex-col grow px-4 divide-y-2'>
                <div className='flex flex-row items-center justify-between h-6'>
                    <p className='text-sm'>Product Family</p>
                    <p className='text-sm font-normal'>32-bit MCU</p>
                </div>
                <div className='flex flex-row items-center justify-between h-6'>
                    <p className='text-sm'>Product Status</p>
                    <p className='text-sm font-normal'>No New Designs</p>
                </div>
                <div className='flex flex-row items-center justify-between h-6'>
                    <p className='text-sm'>Product Note</p>
                    <p className='text-sm font-normal'>Automotive</p>
                </div>
                <div className='flex flex-row items-center justify-between h-6'>
                    <p className='text-sm'>Lead Time</p>
                    <p className='text-sm font-normal'>16wks</p>
                </div>
                <div className='flex flex-row items-center justify-between gap-10 h-6'>
                    <p className='text-sm'>Disti On Hand</p>
                    <p className='text-sm font-normal'>35 wks</p>
                </div>
            </div>
        </div>
    )
}
