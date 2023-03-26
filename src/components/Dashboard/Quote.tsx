import React, {Component} from 'react'
import Message from '../../assets/icons/message.svg';
import Pin from '../../assets/icons/pin.svg';
import DownArrow from '../../assets/icons/downArrow.svg';

const Quote = () => {
  return (
    <div className='bg-white p-4 flex gap-2 lg:gap-14 flex-col lg:flex-row relative h-full rounded shadow-sm'>
        <div className='lg:basis-1/2'>
            <p className='text-lg font-bold mb-6'>Quote1234</p>
            <div className='flex gap-3 justify-between'>
                <div>
                    <p className='text-sm text-gray'>Start Date</p>
                    <p className='text-base font-bold leading-[26px]'>08/01/2022</p>
                </div>
                <div>
                    <p className='text-sm text-gray'>Expiry Date</p>
                    <p className='text-base font-bold leading-[26px]'>08/01/2022</p>
                </div>
                <div>
                    <p className='text-sm text-gray'>Region</p>
                    <p className='text-base font-bold leading-[26px]'>Americas</p>
                </div>
            </div>
        </div>
        <div className='lg:basis-1/2'>
            <div className='flex justify-end gap-2 mb-2 absolute top-4 right-4 lg:relative lg:top-0 lg:right-0'>
                <img className='border bg-[MessageBox] text-gray border-gray hover:bg-gray-50 hover:text-gray-100 transition-all w-6 h-6 rounded p-1' src={Message}></img>
                <img className='border bg-[MessageBox] text-gray border-gray hover:bg-gray-50 hover:text-gray-100 transition-all w-6 h-6 rounded' src={Pin}></img>
            </div>
            <div className='flex divide-x-2 divide-lightgray gap-8 lg:gap-12'>
                <div>
                    <p className='text-base text-gray mb-2'>Total Resale</p>
                    <p className='text-lg font-bold leading-[26px]'>$ 150,000</p>
                </div>
                <div className='pl-2'>
                    <p className='text-base text-gray mb-2'>Total Resale</p>
                    <p className='text-lg font-bold leading-[26px]'>$ 150,000</p>
                </div>
                <div className='pl-2'>
                    <p className='text-base text-gray mb-2'>Total Resale</p>
                    <p className='text-lg font-bold leading-[26px]'>$ 150,000</p>
                </div>
            </div>
        </div>
        <img className='border text-gray border-gray hover:bg-gray-50 hover:text-white transition-all w-6 h-6 rounded absolute bottom-4 right-4 p-1' src={DownArrow} ></img>
    </div>
  )
}

export default Quote