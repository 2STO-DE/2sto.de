import PageLayout from "../../../components/leyout/PageLayout"
import {Box, Image, Text, VStack} from '@chakra-ui/react'

const Index = () => {
    
    return(
        <PageLayout pageTitle="WorkFlow">
            <Box>
                <Image
                    borderRadius='10px'
                    src='https://raw.githubusercontent.com/2STO-DE/2sto.de/97c76b82581543220a066b20090b3044e376721d/assets/workFlowBanner.svg'
                    width='100%'
                />
                <Text
                    fontSize='xx-large'
                    color='white'
                >
                    About
                </Text>
                <Box
                    color='white'
                    marginTop='1%'
                    paddingBottom='5%'
                    fontSize='x-large'
                >
                    <Text>
                    See the wage we earned as a result of daily work and save it thanks to the calendar, see your monthly earnings and past earnings automatically, now it is very easy to calculate your salary "Workflow Premium"
                    </Text>
                    <Text>
                    Workflow Premium Features
                    </Text>
                    <Text>
                    - You can use it wherever you want as it does not need internet access.
                    </Text>
                    <Text>
                    - You can instantly see the salary total of the current month.
                    </Text>
                    <Text>
                    - You can see and list the salary records for the month you want
                    </Text>
                    <Text>
                    - Thanks to its customizable features, you can choose the current currency and change your hourly rate as you wish.
                    </Text>
                    <Text>
                    Security & Privacy
                    All the information you have entered is stored on your own phone (local storage), so no data is shared with us.
                    </Text>
                </Box>
           </Box>
        </PageLayout>
    )
}

export default Index;