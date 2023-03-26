import React from 'react'

export const DoubleLineChart = () => {
    return (
        <div className='bg-white p-5 h-full w-full flex flex-col justify-between gap-2'>
            <div className='flex flex-row justify-between'>
                <p className='text-sm text-gray'>Floor</p>
                <p className='text-sm text-gray'>Target</p>
                <p className='text-sm text-gray'>Ceiling</p>
                <p className='text-sm text-gray'>Resale</p>
                <p className='text-sm text-gray'>DBP</p>
            </div>
            <div className='rounded-lg'>
                <div className="flex flex-row h-2 w-full dark:bg-neutral-600 dark:bg-brand-50 rounded-lg">
                    <div className="h-2 bg-danger w-[35%] rounded-b-none rounded-lg rounded-tr-none"></div>
                    <div className="h-2 bg-warning w-[30%]"></div>
                    <div className="h-2 bg-success w-[35%] rounded-b-none rounded-tl-none rounded-lg"></div>
                </div>
                <div className="flex flex-row h-2 w-full dark:bg-neutral-600 dark:bg-brand-50">
                    <div className="h-2 bg-success w-[50%] rounded-t-none rounded-br-none rounded-lg"></div>
                    <div className="h-2 bg-warning w-[30%]"></div>
                    <div className="h-2 bg-danger w-[20%] rounded-t-none rounded-bl-none rounded-lg"></div>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-sm text-black font-bold'>$5.25</p>
                <p className='text-sm text-black font-bold'>$5.85</p>
                <p className='text-sm text-black font-bold'>$6.25</p>
                <p className='text-sm text-black font-bold'>$6.45</p>
                <p className='text-sm text-black font-bold'>$7.25</p>
            </div>
        </div >
    )
}
