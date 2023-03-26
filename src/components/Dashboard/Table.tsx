import React, { useState } from 'react'
import { Product } from '../../interfaces'
import Detail from './Detail'

export const Table = () => {

    const [detailIndex, setDetailIndex] = useState(0)

    const product1: Product = {
        id: 1,
        name_type: "SST38VF6402B-70I/CD",
        name_detail: "IC FLASH 64MBIT PARALLEL 48TFBGA",
        quantity: 275,
        requested: 5.16,
        resale: 5.5,
        cost: 4.95,
        margin: 10,
        info: 5,
        actions: 5,
    }

    const productsArray: Product[] = [
        product1,
        {
            id: 2,
            name_type: "PIC32MZ2048EFM144-I/JWX",
            name_detail: "IC MCU 32BIT 2MB FLASH 144TFBGA",
            quantity: 550,
            requested: 17.25,
            resale: 18.34,
            cost: 16.5,
            margin: 10.0,
            info: 4,
            actions: 6,
        },
        {
            id: 3,
            name_type: "PD70210AILD-TR",
            name_detail: "IC POE CNTRL 1 CHANNEL 16DFN",
            quantity: 400,
            requested: 1.95,
            resale: 2.65,
            cost: 2.25,
            margin: 15.1,
            info: 7,
            actions: 6,
        }        
    ]

    const handleDetail = (index: number) => {
        if(index === detailIndex)
            setDetailIndex(-1)
        else
            setDetailIndex(index)
    }

    return (
        <div className='overflow-x-auto'>
            <table className='w-full bg-white border rounded mt-2 border-none'>
                <thead>
                    <tr className="bg-[#F9FAFB] shadow">
                        <th className='pl-4 pt-2 border'>
                            <div className='w-4 h-4 rounded bg-white border font-lg flex justify-center items-center'>
                            </div>
                        </th>
                        <th className='px-4 py-2 border text-sm'>Product</th>
                        <th className='px-4 py-2 border text-sm'>Quantity</th>
                        <th className='px-4 py-2 border text-sm'>Requested</th>
                        <th className='px-4 py-2 border text-sm'>Resale</th>
                        <th className='px-4 py-2 border text-sm'>Cost </th>
                        <th className='px-4 py-2 border text-sm'>Margin </th>
                        <th className='px-4 py-2 border text-sm'>Info </th>
                        <th className='px-4 py-2 border text-sm'>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {productsArray.map((product: Product, index: number) => (
                        <>
                            <tr key={product.id} className=' bg-white h-full cursor-pointer hover:bg-lightgray transition-all shadow' onClick={() => handleDetail(index)}>
                                <td className="border justify-center px-4 py-2 items-center" data-label="Id">
                                    <div className='w-4 h-4 rounded bg-white border font-lg flex justify-center items-center '>
                                    </div>
                                </td>
                                <td className="border px-4 py-2" data-label="Product">
                                    <div>
                                        <p className='text-sm text-[#4094F7]'>
                                            {product.name_type}
                                        </p>
                                        <p className='text-ms text-{#404040}'>
                                            {product.name_detail}
                                        </p>
                                    </div>
                                </td>
                                <td className="border px-4 py-2 text-sm text-gray text-right bg-[#F9FAFB]" data-label="Quantity">{product.quantity}k</td>
                                <td className="border px-4 py-2 text-sm text-gray text-right bg-[#F9FAFB]" data-label="Requested">${product.requested}</td>
                                <td className="border px-4 py-2 text-sm text-gray text-right" data-label="Resale">${product.resale}</td>
                                <td className="border px-4 py-2 text-sm text-gray text-right" data-label="Cost">${product.cost}</td>
                                <td className="border px-4 py-2 text-sm text-gray text-right" data-label="Margin">{product.margin}%</td>

                                <td className="border">
                                    <div className='flex justify-between px-5'>
                                        <div className='w-5 h-5 rounded bg-[#CDCDCD] text-[#757575] font-lg flex justify-center items-center lg:relative top-0 right-0'>
                                            6
                                        </div>
                                        <div className='w-5 h-5 rounded bg-[#4094F7] text-white font-lg flex justify-center items-center lg:relative top-0 right-0'>
                                            7
                                        </div>
                                        <div className='w-5 h-5 rounded bg-[#4094F7] text-white font-lg flex justify-center items-center lg:relative top-0 right-0'>
                                            8
                                        </div>
                                        <div className='w-5 h-5 rounded bg-[#4094F7] text-white font-lg flex justify-center items-center lg:relative top-0 right-0'>
                                            9
                                        </div>
                                        <div className='w-5 h-5 rounded bg-[#4094F7] text-white font-lg flex justify-center items-center lg:relative top-0 right-0'>
                                            10
                                        </div>
                                    </div>
                                </td>
                                <td className="border">
                                    <div className='flex justify-between px-5'>
                                        <div className='w-8 h-8 rounded-full  border-2  text-[#4094F7] font-lg font-bold flex justify-center items-center lg:relative top-0 right-0'>
                                            11
                                        </div>
                                        <div className='w-8 h-8 rounded-full border-2 text-[#4094F7] font-lg font-bold flex justify-center items-center lg:relative top-0 right-0'>
                                            12
                                        </div>
                                        <div className='w-8 h-8  rounded-full border-2 text-[#4094F7] font-lg font-bold flex justify-center items-center lg:relative top-0 right-0'>
                                            13
                                        </div>
                                        <div className='w-8 h-8  rounded-full border-2 text-[#4094F7] font-lg font-bold flex justify-center items-center lg:relative top-0 right-0'>
                                            14
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {
                                detailIndex === index && (
                                    <tr key={`detail-${index}`}>
                                        <td colSpan={9} className="bg-lightgray">
                                            <Detail data={product}/>
                                        </td>
                                    </tr>
                                )
                            }
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
