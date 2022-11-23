import { Box } from '@chakra-ui/react'
import type {ReactNode} from 'react'
import {FC} from 'react'
type IProps = {
    children:ReactNode
}

const Layout:FC<IProps> = ({children}) => {
    return (
        <>
        <Box
            h='100%'
            bgColor='#0F0E0E'
        >
            {children}
        </Box>
        </>
    )
}

export default Layout