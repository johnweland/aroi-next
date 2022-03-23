import '../styles/globals.css'
import type { AppProps } from 'next/app'

function AroiApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default AroiApp
