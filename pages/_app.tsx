import type { AppProps } from 'next/app'
import  Layout  from '../components/layout/Layout'
import NotificationContextProvider from '../store/notificationContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
 

}

export default MyApp
