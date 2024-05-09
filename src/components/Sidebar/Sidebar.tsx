import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    Grid,
    GridItem,
    Box,
    Icon,
    Text,
    Button
} from '@chakra-ui/react';
import { FaUser } from "react-icons/fa";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    colorMode: string;
} 

const Sidebar = (props: Props) => {
    const {isOpen, onClose, colorMode} = props;
  return (
    <>
        <Drawer
            placement='left' 
            onClose={onClose} 
            isOpen={isOpen}
        >
        <DrawerOverlay />
        <DrawerContent
            sx={{
                backgroundColor:colorMode === 'dark' ? '#0e0e1c': '#fff'
            }}
        >
          <DrawerHeader
            borderBottomWidth='1px'
            sx={{
                color: colorMode === 'dark' ? '#fff': 'unset'
            }}
          >
            Menu
          </DrawerHeader>
          <DrawerCloseButton
            sx={{
                color: colorMode === 'dark' ? '#fff': 'unset'
            }}
          />
          <DrawerBody>
            <Grid
                gap={4}
                sx={{
                    marginTop: '20px',
                    backgroundColor:colorMode === 'dark' ? '#0e0e1c': '#fff'
                }}
            >
                <GridItem
                    w='100%' h='20' 
                    bgImg='./Assets/for-men.webp'
                    bgPosition='center'
                    bgSize='cover'
                    bgRepeat='no-repeat'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h1 className='text-sm font-bold'>Shop Men</h1>
                </GridItem>
                <GridItem
                    w='100%' h='20' 
                    bgImg='./Assets/for-women.webp'
                    bgPosition='center'
                    bgSize='cover'
                    bgRepeat='no-repeat'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h1 className='text-sm font-bold'>Shop Women</h1>
                </GridItem>
                <GridItem
                    w='100%' h='20' 
                    bgImg='./Assets/for-kids.webp'
                    bgPosition='center'
                    bgSize='cover'
                    bgRepeat='no-repeat'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h1 className='text-sm font-bold'>Shop Kids</h1>
                </GridItem>
            </Grid>
            <Box
                sx={{
                    marginTop: '50px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                    }}
                >
                    <Icon as={FaUser}
                        sx={{
                            width: '20px',
                            height: '20px',
                            color: colorMode === 'dark' ? '#fff': 'unset'
                        }}
                    />
                    <h1 className='dark:text-white'>My Account</h1>
                </Box>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        marginTop: '20px',
                    }}
                >
                    <Button 
                        variant='solid'
                        colorScheme='blue'
                    >
                        Log in
                    </Button>
                    <Button 
                        variant='outline'
                        sx={{
                            marginTop: '10px',
                            color: colorMode === 'dark' ? '#fff': 'unset'
                        }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar;