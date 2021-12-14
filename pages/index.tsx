import { Fragment } from 'react'
import type { NextPage } from 'next'
import {FeaturedPosts, Hero} from '../components/homePage'
import {PostInterface} from '../types'
import {getFeaturedPosts} from '../helper/PostsUtile'
import Head from 'next/head'

type HomePageProps ={
  posts:PostInterface []
}
const HomePage: NextPage<HomePageProps> = ({posts}) => {
  return (
    <Fragment>
      <Head>
        <title>Mahdi Blog</title>
        <meta name="description" content="I post about peogramming and web devlopment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts}/>
    </Fragment>
  )
}
export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  return {
    props:{
      posts:featuredPosts
    }
  }
}
export default HomePage
