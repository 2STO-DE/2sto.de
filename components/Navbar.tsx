import { Box, Button, HStack, Image, Link, Text, useMediaQuery } from "@chakra-ui/react"

const Navbar = () => {
    const [isMobile] = useMediaQuery("(min-width: 900px)")
    
    const desktop = (
         <Box
            position='fixed'
            h='8vh'
            w='80%'
            backgroundColor='transparent'
            marginLeft='10%'
            marginRight='10%'
            paddingTop='0.5%'
            css={{ backdropFilter: "blur(6px)" }}
            zIndex='2'
            
        >
            <HStack 
                    justifyContent='space-between'  
                >
                <HStack>
                    <Image src='/logo.png' alt="logo" h='50px' />
                    <Text 
                        color='white' 
                        fontWeight='bold'
                    >
                        2STO
                    </Text>
                </HStack>
                <HStack 
                    w='30%'
                    backgroundColor='#0080FB'
                    borderRadius='20px'
                    color='white'
                    justifyContent='space-between'
                    padding='0.5%'
                    paddingRight='3%'
                    paddingLeft='3%'
                >
                    <Link
                        href="/" 
                        padding='2%' 
                        fontWeight='bold'
                        borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }} 
                    >
                        Home
                    </Link>
                    {/* Create About page then this code block make active */}
                    {/* <Link 
                        padding='2%' 
                        fontWeight='bold' 
                        borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }}
                    >
                            About
                    </Link> */}
                    <Link 
                    href="/apps"
                    padding='2%'  
                    fontWeight='bold' 
                    borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }}
                    >
                        Apps
                    </Link>
                    <Link 
                    padding='2%'  
                    fontWeight='bold' 
                    borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }}
                    >
                        Contact
                    </Link>  
                </HStack>
                <Box>
                    <Button 
                        color='white'
                        backgroundColor='#0080FB'
                        borderRadius='15px'
                        _hover={{
                            backgroundColor:'#0668E1'
                        }}
                        _active={{
                            backgroundColor:'#0668E1'
                        }}
                    >
                        GitHub
                    </Button>
                </Box>
            </HStack>
        </Box>
    )
    
    const mobile = (
        <Box
            position='fixed'
            h='7vh'
            w='90%'
            backgroundColor='transparent'
            css={{ backdropFilter: "blur(6px)" }}
            marginLeft='5%'
            marginRight='5%%'
            paddingTop='3%'
        >
            <HStack 
                    justifyContent='center'  
                >
                <HStack
                    w='100%' 
                    backgroundColor='#0080FB'
                    borderRadius='20px'
                    color='white'
                    justifyContent='space-around'
                    padding='0.5%'
                >
                    <Link
                        href='/'
                        padding='2%' 
                        fontWeight='bold'
                        borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }} 
                    >
                        Home
                    </Link>
                    <Link
                        href='/apps' 
                        padding='2%' 
                        fontWeight='bold'
                        borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }} 
                    >
                        Apps
                    </Link>
                    {/* <Link 
                        padding='2%' 
                        fontWeight='bold' 
                        borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }}
                    >
                            About
                    </Link> */}
                    <Link 
                    padding='2%'  
                    fontWeight='bold' 
                    borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }}
                    >
                        Contact
                    </Link>
                    <Link 
                    padding='2%'  
                    fontWeight='bold' 
                    borderBottom='3px solid transparent'
                        _hover={{
                            textDecoration:'none',
                            borderBottom:'3px solid white'
                        }}
                    >
                        GitHub
                    </Link>
                </HStack>
            </HStack>
        </Box>
    )
    
    return (
        <>
            {isMobile ? desktop : mobile}
        </>    
    )    
}

export default Navbar