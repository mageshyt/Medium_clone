import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import Router from 'next/router'
import PrimeReact from 'primereact/api'
import ProgressBar from '@badrap/bar-of-progress'

import { MoralisProvider } from 'react-moralis'
PrimeReact.ripple = true
const progress = new ProgressBar({
  size: 4,
  color: '#59bcfe',
  className: 'z-50',
  delay: 100,
})
Router.events.on('routeChangeStart', progress.start)

Router.events.on('routeChangeComplete', progress.finish)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
