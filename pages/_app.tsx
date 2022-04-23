import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons
import Router from 'next/router'
import PrimeReact from 'primereact/api'
import ProgressBar from '@badrap/bar-of-progress'
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
  return <Component {...pageProps} />
}

export default MyApp
