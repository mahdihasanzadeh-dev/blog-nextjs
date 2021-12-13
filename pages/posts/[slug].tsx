import { Fragment} from 'react'
import type {NextPage} from 'next'
import Head from 'next/head'
import { PostContent } from '../../components/posts'

const PostDetailPage :NextPage =()=> {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="" />
            </Head>
          
            <PostContent />
        </Fragment>
    )
}

export default PostDetailPage
