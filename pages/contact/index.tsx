import { Fragment } from 'react'
import type { NextPage } from 'next'
import { ContactForm } from '../../components/contactPage'
import Head from 'next/head'

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send me your messages" />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
