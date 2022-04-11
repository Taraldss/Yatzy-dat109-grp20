import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/view/components/navbar/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='root'>
    <NavBar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
