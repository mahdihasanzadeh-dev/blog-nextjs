import type {NextPage} from 'next'
import Head from 'next/head'
import {AllPosts} from '../../components/posts'
const DUMMY_POSTS=[
    {
    title:'Getting started with NextJs',
    image:'getting-started-nextjs.png',
    excerpt:'Next Js is a the React Framework for production - it make building fullstack React apps and sites a breez and ship with built-in SSR',
    date:'2020-03-10',
    slug:'getting-started-with-next-js'
    },
    {
    title:'Getting started with NextJs2',
    image:'getting-started-nextjs.png',
    excerpt:'Next Js is a the React Framework for production - it make building fullstack React apps and sites a breez and ship with built-in SSR',
    date:'2020-03-10',
    slug:'getting-started-with-next-js2'
    },
    {
    title:'Getting started with NextJs3',
    image:'getting-started-nextjs.png',
    excerpt:'Next Js is a the React Framework for production - it make building fullstack React apps and sites a breez and ship with built-in SSR',
    date:'2020-03-10',
    slug:'getting-started-with-next-js3'
    },
    {
    title:'Getting started with NextJs4',
    image:'getting-started-nextjs.png',
    excerpt:'Next Js is a the React Framework for production - it make building fullstack React apps and sites a breez and ship with built-in SSR',
    date:'2020-03-10',
    slug:'getting-started-with-next-js4'
    },
  ]
const AllPostsPage :NextPage =()=> {
    return (
        <div>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="" />
            </Head>
            <AllPosts posts={DUMMY_POSTS} />
        </div>
    )
}

export default AllPostsPage
