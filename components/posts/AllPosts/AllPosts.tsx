import React from 'react'
import { PostsGrid } from '../index'
import {PostInterface} from '../../../types'
import classes from './AllPosts.module.css'
type AllPostsPorps ={
    posts:PostInterface []
}
const AllPosts:React.FC<AllPostsPorps> =({posts})=>{
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default AllPosts
