// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Layout from '../components/leyout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
      <Navbar/>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp