import React from 'react'
import { Input } from '@material-tailwind/react'
import Button from '@material-tailwind/react/components/Button'
import BackImg from '../../assets/icons/back.svg'

export const TabBoxes = () => {
    return (
        <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='flex h-10 divide-x-2 border-2 rounded-md divide-color-grey bg-white '>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                    <p className='text-base'>View All</p>
                    <p className='text-sm text-gray'>(6)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Submitted</p>
                    <p className='text-sm text-gray'>(3)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Workbook</p>
                    <p className='text-sm text-gray'>(3)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                    <p className='text-base'>My Pending</p>
                    <p className='text-sm text-gray'>(0)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Approvied</p>
                    <p className='text-sm text-gray'>(0)</p>
                </div>
                <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                    <p className='text-base'>Debited</p>
                    <p className='text-sm text-gray'>(3)</p>
                </div>
            </div>
            <div className='flex flex-row mt-3 lg:mt-0'>
                <img className='w-10 h-10 rounded bg-white border-2 text-[#4094F7] font-lg font-bold flex items-center p-1.5 hover:bg-[#D0D5DD] mr-3' src={BackImg}>
                </img>
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-10 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none  focus:bg-white focus:border-indigo-600"
                    />
                </div>
            </div>
        </div>
    )
}
