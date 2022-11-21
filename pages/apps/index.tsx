import { Box, Text } from "@chakra-ui/react"
import AppsCard from "../../components/AppsCard";
import PageLayout from "../../components/leyout/PageLayout";

const Apps = () => {
    return (
        <PageLayout pageTitle="Apps">
        <Box
            h='100vh'
            overflow='hidden'
        >
            <Box>
                <AppsCard
                    img="https://play-lh.googleusercontent.com/N4ivFDHFvEZdLKnY-wotnEZmRKvN2fpNtVmwZ1DitkaFUzQmHh3Aj5mTHjwCzjUyEpE=w240-h480-rw"
                    title="Workflow Premium"
                />    
            </Box>
        </Box>
        </PageLayout>
   )
}

export default Apps;