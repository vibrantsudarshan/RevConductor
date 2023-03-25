import React from 'react'

export const TabBoxes = () => {
    return (
        <div className='flex items-center justify-between large-col large:flex-col'>
            <div className='flex justify-start h-10 divide-x-2 border-2 rounded-md divide-color-grey bg-white  ml-4'>
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
            <div className='flex flex-row mr-2 w-auto'>
                <div className='w-10 h-10 ml-87 rounded bg-white border-2 text-[#4094F7] font-lg font-bold flex justify-center items-center p-4 hover:bg-[#D0D5DD]'>
                    4
                </div>
                <div className='w-80 h-10  ml-3 bg-white border-2 gap-5 rounded-lg text-gray font-lg font-bold flex justify-start items-center p-4'>
                    <div className='text-gray'>
                        5
                    </div>
                    <div className='text-gray text-base'>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 sm:text-sm" placeholder="Search" type="text" name="search"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
