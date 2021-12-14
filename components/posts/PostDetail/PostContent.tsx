import React from 'react'
import Image from 'next/image'
import  ReactMarkdown  from 'react-markdown'
import PostHeader from './PostHeader'
import {PostInterface} from '../../../types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
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
        code(code:any) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
              <SyntaxHighlighter
                style={atomDark}
                language={language}  
              >
                  {children}
            </SyntaxHighlighter>
            );
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
