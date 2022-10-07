import PageLayout from "../components/leyout/PageLayout"
import { Box, HStack, Text, Image, VStack, useMediaQuery } from "@chakra-ui/react"

const Home = () => {
  const [isMobile] = useMediaQuery("(min-width: 758px)")

  const desktop = (
        <HStack 
          h='60vh' 
        >
          <VStack
            w='50%'
          >
            <Image src="./index_banner.png" alt="img" />
          </VStack>
          <VStack
            w='50%'
          >
              <Text
                fontSize='4.5rem'
                color='white'
                fontWeight='bold'
             >
                Next generation applications
              </Text>
              <Text 
                color='gray.100' 
                fontSize='2.5rem'
              >
                We build perfectly ui and high function  for both web and mobile 
              </Text>
          </VStack> 
        </HStack>
  )

  const mobile = (
         <VStack 
          h='60vh' 
          paddingTop='15%'
         >
          <VStack>
            <Image src="https://www.q5infotech.com/wp-content/uploads/2020/09/website-design-and-development.png" alt="img" />
          </VStack>
          <VStack>
              <Text
                fontSize='2rem'
                color='white'
                fontWeight='bold'
             >
                Next generation applications
              </Text>
              <Text 
                color='gray.100' 
                fontSize='1.5rem'
              >
                We build perfectly ui and high function  for both web and mobile 
              </Text>
          </VStack> 
        </VStack>   
  )

  return(
      <PageLayout pageTitle='2STO' >
        {isMobile ? desktop : mobile}
      </PageLayout>    
  )
}

export default Home