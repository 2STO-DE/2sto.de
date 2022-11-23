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
                        color='#EDEDED' 
                        fontWeight='bold'
                    >
                        2STO
                    </Text>
                </HStack>
                <HStack 
                    w='30%'
                    backgroundColor='#EDEDED'
                    borderRadius='20px'
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
                            borderBottom:'3px solid black'
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
                            borderBottom:'3px solid black'
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
                            borderBottom:'3px solid black'
                        }}
                    >
                        Contact
                    </Link>  
                </HStack>
                <Box>
                    <Button 
                        backgroundColor='#EDEDED'
                        borderRadius='15px'
                        _hover={{
                            backgroundColor:'lightgrey'
                        }}
                        _active={{
                            backgroundColor:'grey'
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
                    backgroundColor='#EDEDED'
                    borderRadius='20px'
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
                            borderBottom:'3px solid #EDEDED'
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
                            borderBottom:'3px solid #EDEDED'
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
                            borderBottom:'3px solid #EDEDED'
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
                            borderBottom:'3px solid #EDEDED'
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