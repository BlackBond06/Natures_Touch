import React from 'react';
import {SearchIcon, MoonIcon } from '@chakra-ui/icons';
import { FaShoppingBag, FaUser } from "react-icons/fa";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Icon
} from '@chakra-ui/react';

type Props = {
    isOpen: boolean,
    onClose: () => void;
    colorMode: string;
}

const SearchBox = (props: Props) => {
    const {isOpen, onClose, colorMode } = props;
  return (
    <>
        <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent
                sx={{
                    backgroundColor:colorMode === 'dark' ? '#0e0e1c': '#fff'
                }}
            >
                <DrawerCloseButton
                    sx={{
                        color: colorMode === 'dark' ? '#fff': 'unset'
                    }}
                />
                <DrawerBody>
                    <div>
                        <div className="min-h-24 block sm:flex items-center px-4 py-0 sm:px-8">
                            <div className='flex items-center w-full sm:w-1/4 text-gray-600 mb-6 sm:mb-0'>
                            <div 
                                className="flex items-center relative w-[100%]"
                            >
                                <h1 className='sm:hidden block text-sm font-bold'>
                                        Search our store
                                </h1>
                                <div className="w-[50px] h-[50px] hidden sm:block">
                                    <img src="./Assets/logo.png" alt="logo" />
                                </div>
                                <p className="text-xs italic hidden sm:block absolute left-11 bottom-3 dark:text-white">atures  Touch</p>
                            </div>
                            </div>
                            <div className='w-full sm:w-1/2 h-12 flex items-center'>
                                <form 
                                    action="get" 
                                    role="search" 
                                    className="relative flex w-full  h-full dark:text-white"
                                >
                                    <Input
                                        className='placeholder:text-xs sm:placeholder:text-sm dark:placeholder:text-white'
                                        placeholder='Search products...'
                                    />
                                    <SearchIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                            position: 'absolute',
                                            right: '20px',
                                            top: '12px',
                                        }}
                                    />
                                </form>
                            </div>
                            <div className='hidden sm:flex flex-1 items-center justify-end gap-5 sm:gap-8 dark:text-white'>
                                <div>
                                    <Icon as={FaUser}
                                        sx={{
                                        width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </div>
                                <div className='relative'>
                                    <Icon as={FaShoppingBag}
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                    <div className=' flex items-center justify-center w-6 h-6 bg-[#808080]          absolute top-[-12px] left-3 rounded-full text-white'>0</div>
                                </div>
                                <div>
                                    <MoonIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex pl-4 sm:pl-0 items-center sm:justify-center gap-1 mt-3 sm:mt-0'>
                            <p className='dark:text-white'>Recent Searches:</p>
                            <div className='flex gap-4 text-gray-400 text-sm items-center'>
                                <p>T-shirt</p>
                                <p>Jacket</p>
                                <p>Senator</p>
                            </div>
                        </div>
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}
export default SearchBox;