import React from 'react'

const Peoples = () => {
    return (
        <div className='flex flex-col lg:flex-row divide-y-2 lg:divide-x-2 divide-lightgray h-full'>
            <div className='bg-white p-4 flex flex-col flex-grow'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-sm text-gray mt-3'>Distributer</p>
                        <p className='text-lg font-bold mt-1'>Avnet</p>
                    </div>
                    <div className='w-11 h-9 rounded bg-[#BFF9DB] text-[#0EBA61] font-lg font-bold flex justify-center items-center'>
                        85
                    </div>

                </div>
                <div className='flex justify-between mt-5'>
                    <div className='gap-5 flex justify-between'>
                        <div>
                            <p className='text-sm text-gray'>Category</p>
                            <p className='text-base'>Focus</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray'>Revenue Tier</p>
                            <p className='text-base'>Tier2</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray'>Revenue</p>
                            <p className='text-base'>$275M</p>
                        </div>
                    </div>
                    <div className='gap-5 pl-1 justify-between'>
                        <p className='text-gray text-sm'>Last 12Months</p>
                        <p className='text-[#0EBA61] text-ms'>↑ 76.01%</p>
                    </div>
                </div>
            </div> 
            <div className='bg-white p-4 flex flex-col flex-grow'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-sm text-gray mt-3'>Purchase Customer</p>
                        <p className='text-lg font-bold mt-1'>Foxconn</p>
                    </div>
                    <div className='w-11 h-9 rounded bg-[#FFF3CD] text-[#FFC700] font-lg font-bold flex justify-center items-center'>
                        62
                    </div>

                </div>
                <div className='flex justify-between mt-5'>
                    <div className='gap-5 flex justify-between'>
                        <div>
                            <p className='text-sm text-gray'>Category</p>
                            <p className='text-base'>Focus</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray'>Revenue Tier</p>
                            <p className='text-base'>Tier2</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray'>Revenue</p>
                            <p className='text-base'>$275M</p>
                        </div>
                    </div>
                    <div className='gap-5 pl-1 justify-between'>
                        <p className='text-gray text-sm'>Last 12Months</p>
                        <p className='text-[#0EBA61] text-ms'>↑ 76.01%</p>
                    </div>
                </div>

            </div>
            <div className='bg-white p-4 flex gap-2 lg:gap-2 flex-col flex-grow'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-sm text-gray mt-3'>Purchase Customer</p>
                        <p className='text-lg font-bold mt-1'>Foxconn</p>
                    </div>
                    <div className='w-11 h-9 rounded bg-[#FFECE8] text-[#FF0000] font-lg font-bold flex justify-center items-center'>
                        47
                    </div>

                </div>
                <div className='flex justify-between mt-5'>
                    <div className='gap-5 flex justify-between'>
                        <div>
                            <p className='text-sm text-gray'>Category</p>
                            <p className='text-base'>Focus</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray'>Revenue Tier</p>
                            <p className='text-base'>Tier2</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray'>Revenue</p>
                            <p className='text-base'>$275M</p>
                        </div>
                    </div>
                    <div className='gap-5 pl-1 justify-between'>
                        <p className='text-gray text-sm'>Last 12Months</p>
                        <p className='text-[#0EBA61] text-ms'>↑ 76.01%</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Peoples