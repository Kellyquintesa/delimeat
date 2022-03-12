import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'



const colors = {
  foodiez: {
    orange: '#FA5A1E'
  },
}


const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
   
  )
}

export default MyApp
