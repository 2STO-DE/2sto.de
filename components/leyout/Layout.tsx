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
            bgGradient='linear(to-t, #00C9FF, blue.300)'
        >
            {children}
        </Box>
        </>
    )
}

export default Layout