import { Fragment} from 'react'
import type {GetStaticPropsResult, NextPage} from 'next'
import Head from 'next/head'
import { PostContent } from '../../components/posts'
import { getPostData, getPostsFiles } from '../../helper/PostsUtile'
import {PostInterface} from '../../types'
type PostDetailPageProps ={
    post:PostInterface
}
const PostDetailPage :NextPage<PostDetailPageProps> =({post})=> {

    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="" />
            </Head>
          
            <PostContent post={post} />
        </Fragment>
    )
}
type Params = {
	params: {
		slug: string
	}
}
export function getStaticProps({params}:Params){
    const {slug} = params;
    const postData = getPostData(slug)
    return{
        props:{
            post:postData
        },
        revalidate:600
    }
}
export function getStaticPaths(){
    const postsFilenames = getPostsFiles()
    
    const slugs = postsFilenames.map(fileName=>fileName.replace(/\.md$/,''))
    return{
        paths:slugs.map(slug=>({params:{slug:slug}})),
        fallback:false
    }
}

export default PostDetailPage
