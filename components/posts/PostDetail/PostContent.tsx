import React from 'react'
import Image from 'next/image'
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
    const customRenderers = {
        img(image:any){
            return(
                <Image 
                src={`/images/posts/${slug}/${image.src}`} 
                alt={image.alt} 
                width={300} 
                height={200} 
                layout="responsive"
                 />
            ) 
        
        },
    }
    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>
                {content}
            </ReactMarkdown>
            
        </article>
    )
}

export default PostContent
