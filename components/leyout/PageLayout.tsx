import Head from "next/head";
import React from 'react' ;
import type {ReactNode} from 'react';
import { Box } from "@chakra-ui/react";

type IProps = {
    children:ReactNode;
    pageTitle:string;
}

const PageLayout = ({children, pageTitle}) => {
    return (
        <>
        <Head>
            <title>{pageTitle}</title>
        </Head>
        <Box>
            {children}
        </Box>
        </>
    )
}
export default PageLayout