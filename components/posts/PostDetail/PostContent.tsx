import React from 'react'
import  ReactMarkdown  from 'react-markdown'
import PostHeader from './PostHeader'
import classes from './PostContent.module.css'
const DUMMY_POST=
{
    title:'Getting started with NextJs',
    image:'getting-started-nextjs.png',
    date:'2020-03-10',
    slug:'getting-started-with-next-js',
    content:'# This is first post'
}

const  PostContent:React.FC =()=> {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
            
        </article>
    )
}

export default PostContent
