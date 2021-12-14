import type {NextPage} from 'next'
import Head from 'next/head'
import {PostInterface} from '../../types'
import {AllPosts} from '../../components/posts'
import {getAllPosts} from '../../helper/PostsUtile'

type AllPostsPageProps ={
posts:PostInterface []
}
const AllPostsPage :NextPage<AllPostsPageProps> =({posts})=> {
    return (
        <div>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programing-related tutorials and posts" />
            </Head>
            <AllPosts posts={posts} />
        </div>
    )
}
export function getStaticProps(){
    const featuredPosts = getAllPosts();
    return {
      props:{
        posts:featuredPosts
      }
    }
  }
export default AllPostsPage
