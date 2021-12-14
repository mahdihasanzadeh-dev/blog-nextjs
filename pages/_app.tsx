import  Layout  from '../components/layout/Layout'
import NotificationContextProvider from '../store/notificationContext'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
 

}

export default MyApp
