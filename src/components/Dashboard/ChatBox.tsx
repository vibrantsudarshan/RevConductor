import Button from '@material-tailwind/react/components/Button';
import Input from '@material-tailwind/react/components/Input';
import React from 'react'
import { useState } from 'react'
import AvatarBoy from '../../assets/icons/Avatar1.png'
import AvatarGirl from '../../assets/icons/Avatar2.png'
import MsgReply from '../../assets/icons/chat.svg';
export const ChatBox = () => {

    const [activeTabIndex, setactiveTabIndex] = useState(1);
    const onClickTab = (index: number) => {
        setactiveTabIndex(index);
    }

    return (
        <div className='bg-white shadow-sm roudned h-full p-4'>
            <div className='flex flex-col md:flex-col lg:flex-row  justify-between items-center'>
                <div className='flex justify-start h-10 divide-x-2 border-2 rounded-md divide-color-grey bg-white'>
                    <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                        <p className='text-base'>Comments</p>
                    </div>
                    <div className='flex items-center pl-4 pr-4 pt-3 pb-3 whitespace-nowrap hover:bg-[#D0D5DD]'>
                        <p className='text-base'>Activity Log</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className="flex space-x-5 border-b">
                        <button
                            key='1'
                            className={`px-4 py-2 whitespace-nowrap border-b-4 transition-colors duration-300 ${1 === activeTabIndex
                                ? "border-[#4094F7]"
                                : "border-transparent hover:border-[#4094F7]"
                                }`}
                            // Change the active tab on click.
                            onClick={() => setactiveTabIndex(1)}>
                            Internal(3)
                        </button>
                    </div>
                    <div className="flex space-x-3 border-b">
                        <button
                            key='1'
                            className={`px-4 py-2 whitespace-nowrap border-b-4 transition-colors duration-300 ${2 === activeTabIndex
                                ? "border-[#4094F7]"
                                : "border-transparent hover:border-[#4094F7]"
                                }`}
                            onClick={() => setactiveTabIndex(2)}>
                            External(3)
                        </button>
                    </div>
                    <div className="flex space-x-3 border-b border-b-">
                        <button
                            key='1'
                            className={`px-4 py-2 whitespace-nowrap border-b-4 transition-colors duration-300 ${3 === activeTabIndex
                                ? "border-[#4094F7]"
                                : "border-transparent hover:border-[#4094F7]"
                                }`}
                            onClick={() => setactiveTabIndex(3)}>
                            Marketing(10 )
                        </button>
                    </div>
                </div>
            </div>
            <div className='overflow-y-auto h-[448px] scrollbar scrollbar-thumb-gray-900 scroll-mr-1 scrollbar-track-gray-100'>
                <div className='flex flex-row pt-3 mt-3'>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarGirl}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>Millan Fema</p>
                                <p className='text-ms text-[#F98B24] ml-2'>Disributer</p>
                            </div>
                            <p className='text-sm text-gray'>2 mins</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit aliquam, purus sit amet luctus 23gfasg aetqhfhwh qyyahyq
                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 mt-3'>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarBoy}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>June Marry</p>
                                <p className='text-ms text-[#4094F7] ml-2'>Sales OP</p>
                            </div>
                            <p className='text-sm text-gray'>2 hours</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, coetur adipiscing elit ut.                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 mt-3'>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarBoy}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>June Marry</p>
                                <p className='text-ms text-[#4094F7] ml-2'>Sales OP</p>
                            </div>
                            <p className='text-sm text-gray'>2 hours</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, coetur adipiscing elit ut.                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 mt-3 '>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarBoy}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>June Marry</p>
                                <p className='text-ms text-[#4094F7] ml-2'>Sales OP</p>
                            </div>
                            <p className='text-sm text-gray'>2 hours</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, coetur adipiscing elit ut.                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 mt-3'>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarBoy}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>June Marry</p>
                                <p className='text-ms text-[#4094F7] ml-2'>Sales OP</p>
                            </div>
                            <p className='text-sm text-gray'>2 hours</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, coetur adipiscing elit ut.                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 mt-3'>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarBoy}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>June Marry</p>
                                <p className='text-ms text-[#4094F7] ml-2'>Sales OP</p>
                            </div>
                            <p className='text-sm text-gray'>2 hours</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, coetur adipiscing elit ut.                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row pt-3 mt-3'>
                    <img className='h-8 w-8 rounded-full items-center ' src={AvatarBoy}>
                    </img>
                    <div className='bg-[#F7F8F9] rounded-lg p-2 ml-1'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center'>
                                <p className='text-sm font-bold'>June Marry</p>
                                <p className='text-ms text-[#4094F7] ml-2'>Sales OP</p>
                            </div>
                            <p className='text-sm text-gray'>2 hours</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet,  dearo ewci tapD dsafiwt coetur adipiscing elit ut.                        </p>
                        <div className='flex flex-row pt-2'>
                            <p className='text-xs'> 6 Replies</p>
                            <img className='h-3 w-3 ml-2' src={MsgReply}></img>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-6'>
                <input
                    type="text"
                    placeholder="Start typing..."
                    className="w-full h-10 py-3 pl-3 pr-4 text-gray-500 border rounded-md outline-none  focus:bg-white focus:border-indigo-600"
                />
                <Button
                    ripple={true}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 w-20 text-sm bg-[#4094F7] text-white items-center gap-2 ml-3 justify-center" >
                    {/* <img
                        className="h-4 w-4 rounded-full object-cover"
                    /> */}
                    Add
                </Button>
            </div>
        </div>
    )
}
