import React from 'react'
import {PostsGrid} from '../../posts'
import {PostInterface} from '../../../types'
import classes from './FeaturedPosts.module.css'

type FeaturedPosts={
    posts : PostInterface []
}
const FeaturedPosts:React.FC<FeaturedPosts> =({posts})=> {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts
