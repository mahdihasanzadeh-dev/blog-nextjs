import { Fragment } from 'react'
import type { NextPage } from 'next'
import { ContactForm } from '../../components/contactPage'
import Head from 'next/head'

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us" />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
