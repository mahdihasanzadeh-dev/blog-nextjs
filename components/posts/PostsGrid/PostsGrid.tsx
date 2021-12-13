import React from 'react'
import PostItem from '../PostItem/PostItem'
import {PostInterface} from '../../../types'
import classes from './PostsGrid.module.css'
type PostsGridProps = {
    posts:PostInterface []
}
const PostsGrid:React.FC<PostsGridProps> =({posts})=> {
    return (
        <ul className={classes.grid}>
            {posts.map(post=>{
                const {title,image,excerpt,date,slug,content} = post
                return <PostItem
                    key={slug}
                    title = {title}
                    image = {image}
                    excerpt = {excerpt}
                    date = {date}
                    slug = {slug}        
                    content={content}         
                />
            })}
        </ul>
    )
}

export default PostsGrid
