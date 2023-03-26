import Progress from '@material-tailwind/react/components/Progress'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

export const Scores = () => {
    return (
        <div className='bg-white p-5 h-full rounded shadow-sm flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='mb-3 font-normal'>Deal Score</h2>
                <p className='font-bold text-sm'> 85.5</p>
            </div>
            <div className="flex flex-col w-full gap-1">
                <div>
                    <div className="flex flex-row h-2.5 w-full bg-[#ECECEC] dark:bg-neutral-600 dark:bg-brand-50 items-center">
                        <div className="h-2.5 bg-danger w-[50%]"></div>
                        <div className="h-2.5 bg-warning w-[25%]"></div>
                        <div className="h-2.5 bg-success w-[15%]"></div>
                        <div className='h-4 bg-black w-ruler'></div>
                    </div>
                    <div className=''>
                        <div className='flex flex-row justify-between'>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='text-xs text-gray'>0</p>
                            <p className='text-xs text-gray'>25</p>
                            <p className='text-xs text-gray'>50</p>
                            <p className='text-xs text-gray'>75</p>
                            <p className='text-xs text-gray'>100</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='mb-3 font-normal'>Response Time</h2>
                    <p className='font-bold text-sm'> 17 Hours</p>
                </div>
                <div className='flex flex-col '>
                    <div className="flex flex-row h-2.5 w-full bg-[#ECECEC] dark:bg-neutral-600 dark:bg-brand-50">
                        <div className="h-2.5 bg-success w-[30%]"></div>
                        <div className="h-2.5 bg-warning w-[15%]"></div>
                    </div>
                    <div>
                    <div className='flex flex-row justify-between'>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                            <div className='bg-gray h-1 w-ruler'></div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='text-xs text-gray'>0</p>
                            <p className='text-xs text-gray'>10</p>
                            <p className='text-xs text-gray'>20</p>
                            <p className='text-xs text-gray'>30</p>
                            <p className='text-xs text-gray'>40</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
