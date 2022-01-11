import '../styles/globals.css'
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react"
import Footer from '../components/Footer/Footer'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
  );
}

export default MyApp
