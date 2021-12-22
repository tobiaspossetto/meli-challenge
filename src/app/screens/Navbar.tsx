import { Box, Button, Container, Divider, Flex, Icon, Img, Input, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { GoLocation } from 'react-icons/go'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardArrowDown,MdNotificationsNone } from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
const Navbar = () => {
    return (
        <Stack shadow='sm' backgroundColor='primary.500'>
            <Container maxW='container.xl' paddingColor='primary.500' padding="10px" backgroundColor='primary.500'>

                <Flex flexDirection='column'>
                    <Stack marginBottom='20px' alignItems='center' spacing={10} direction='row' width="100%"  >
                        <Img width="170px" src='https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png' />
                        <Box borderRadius='3px' width="100%" maxWidth='670px' shadow='md' paddingX='10px' paddingY='3px' backgroundColor='white' d='flex' alignItems='center'>
                            <Input variant='filled' border='none' placeholder='Buscar productos, marcas y más...' />

                            <Box as='button' borderLeft='1px' borderLeftColor='gray.300' paddingLeft='10px' marginLeft='10px'>
                                <Icon color='gray.500' w={5} h={5} as={AiOutlineSearch} />
                            </Box>

                        </Box>
                        <Box>

                            <Text fontWeight='500'>Esto es un clone UI de práctica</Text>
                        </Box>

                    </Stack>


                    <Stack  alignItems='center' spacing={10} direction='row' width="100%">
                        <Stack  minWidth='170px' alignItems='center' spacing={2} direction='row'>
                            <Icon w={7} h={7} color='blackAlpha.800' as={GoLocation} />
                            <Stack>
                                <Text variant='unstyled'>Córdoba capital</Text>
                            </Stack>

                        </Stack>

                        <Stack minWidth='650px' className='SECTION-LINKS' alignItems='center' direction='row' spacing='15px'>
                            <Menu >
                               
                                <MenuButton d='flex' alignItems='center' border='none'variant='unstyled'  backgroundColor='primary.500' color='blackAlpha.700' fontWeight='400' as={Button} rightIcon={<MdKeyboardArrowDown />}>
                                    Categorías
                                </MenuButton>
                              
                              
                                <MenuList>
                                    <MenuItem>Vehiculos</MenuItem>
                                    <MenuItem>Inmuebles</MenuItem>
                                    <MenuItem>Tecnología</MenuItem>
                                    <MenuItem>Hogar y muebles</MenuItem>
                                    <MenuItem>Electrodomésticos</MenuItem>
                                    <MenuItem>Moda</MenuItem>
                                    <MenuItem>Bebés</MenuItem>
                                </MenuList>
                            </Menu>

                            <Link variant='unstyled'>Ofertas</Link>
                            <Link variant='unstyled'>Historial</Link>
                            <Link variant='unstyled'>Supermercado</Link>
                            <Link variant='unstyled'>Moda</Link>
                            <Link variant='unstyled'>Vender</Link>
                            <Link variant='unstyled'>Ayuda</Link>
                        </Stack>
                        
                        <Stack className='SECTION PROFILE' alignItems='center' direction='row' spacing='2px'>
                                <Button leftIcon={<FaUserCircle/>} rightIcon={<MdKeyboardArrowDown/>} variant='profile'>Tobías</Button>
                                <Button variant='profile'>Mis compras</Button>
                                <Button variant='profile' rightIcon={<MdKeyboardArrowDown/>}>Favoritos</Button>
                                <Icon color='blackAlpha.800'  w={6} h={6} as={MdNotificationsNone}/>
                                <Icon color='blackAlpha.800' w={5} h={5} as={FiShoppingCart}/>
                        </Stack>
                    </Stack>
                </Flex>


            </Container>
        </Stack>

    )
}

export default Navbar
