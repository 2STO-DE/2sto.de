import  {
    HStack, 
    Image, 
    Link, 
    Text, 
    VStack, 
    useMediaQuery,
} from "@chakra-ui/react"
import { FC } from 'react'

type IProps = {
    img:string
    title:string
}

const AppsCard:FC<IProps> = ({img, title}) => {
    const [isMobile] = useMediaQuery("(min-width: 758px)") 
    const Desktop = (
            <HStack
                backgroundColor='white'
                borderRadius='10px'
            >
                <Image
                    borderLeftRadius='10px'
                    alt={title}
                    src={img}
                />
                <VStack
                    w='100%'
                    align='center'
                >
                    <Text
                        fontSize='xxx-large' 
                    >
                        Workflow Premium
                    </Text>
                    <Link
                        border='2px solid black'
                        paddingLeft='1%'
                        paddingRight='1%'
                        style={{ textDecoration: 'none'}}
                        _hover={{backgroundColor:'black',color:'white'}}
                    >
                    <Text
                        fontSize='xx-large' 
                    >
                        Show More
                    </Text>
                    </Link>
                </VStack>
        </HStack>
    )
    
    const Mobile = (
            <VStack
                backgroundColor='white'
                marginTop='10%'
                paddingBottom='5%' 
                borderRadius='10px'
            >
                <Image
                    w='100%'
                    borderTopRadius='10px'
                    alt={title}
                    src={img}
                />
                <VStack
                    w='100%'
                    align='center'
                >
                    <Text
                        fontSize='xxx-large' 
                    >
                        Workflow Premium
                    </Text>
                    <Link
                        border='2px solid black'
                        paddingLeft='1%'
                        paddingRight='1%'
                        style={{ textDecoration: 'none'}}
                        _hover={{backgroundColor:'black',color:'white'}}
                    >
                    <Text
                        fontSize='xx-large' 
                    >
                        Show More
                    </Text>
                    </Link>
                </VStack>
        </VStack>
    )

    return(
        isMobile? Desktop : Mobile 
    )
}

export default AppsCard;