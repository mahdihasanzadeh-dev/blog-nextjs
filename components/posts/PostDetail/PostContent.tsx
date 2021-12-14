import React from 'react'
import  ReactMarkdown  from 'react-markdown'
import PostHeader from './PostHeader'
import {PostInterface} from '../../../types'
import classes from './PostContent.module.css'

type PostContentProps = {
    post:PostInterface
}
const  PostContent:React.FC<PostContentProps> =({post})=> {
    const {slug, image, title, content} = post
    const imagePath = `/images/posts/${slug}/${image}`
    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
            
        </article>
    )
}

export default PostContent
