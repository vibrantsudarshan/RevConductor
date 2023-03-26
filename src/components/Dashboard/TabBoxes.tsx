import React from 'react'
import { Input } from '@material-tailwind/react'
import Button from '@material-tailwind/react/components/Button'

export const TabBoxes = () => {
    return (
        <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='flex h-10 divide-x-2 border-2 rounded-md divide-color-grey bg-white '>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 hover:bg-[#D0D5DD]'>
                    <p className='text-base'>View All</p>
                    <p className='text-sm text-gray'>(6)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Submitted</p>
                    <p className='text-sm text-gray'>(3)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Workbook</p>
                    <p className='text-sm text-gray'>(3)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 hover:bg-[#D0D5DD]'>
                    <p className='text-base'>My Pending</p>
                    <p className='text-sm text-gray'>(0)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Approvied</p>
                    <p className='text-sm text-gray'>(0)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Debited</p>
                    <p className='text-sm text-gray'>(3)</p>
                </div>
            </div>
            <div className='flex flex-row mt-3 lg:mt-0'>
                <div className='w-10 h-10 rounded bg-white border-2 text-[#4094F7] font-lg font-bold flex items-center p-4 hover:bg-[#D0D5DD] mr-3'>
                    4
                </div>
                <Button
                    ripple={true}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3" >
                    <img
                        className="h-4 w-4 rounded-full object-cover"
                    />
                </Button>
                <Input
                    placeholder="Search"
                    className="rounded  focus:border-t-gray-400"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
            </div>
        </div>
    )
}
