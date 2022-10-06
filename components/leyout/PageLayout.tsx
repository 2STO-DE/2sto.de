import Head from "next/head";
import React, { FC } from 'react' ;
import type {ReactNode} from 'react';
import { Box } from "@chakra-ui/react";

type IProps = {
    children:ReactNode;
    pageTitle:string;
}

const PageLayout:FC<IProps> = ({children, pageTitle}) => {
    return (
        <>
        <Head>
            <title>{pageTitle}</title>
        </Head>
        <Box 
            marginLeft='10%'
            marginRight='10%'
            paddingTop='10%'
        >
            {children}
        </Box>
        </>
    )
}
export default PageLayout