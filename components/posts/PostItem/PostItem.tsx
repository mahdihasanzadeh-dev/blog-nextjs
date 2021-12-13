import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {PostInterface} from '../../../types'
import classes from './PostItem.module.css'

const PostItem:React.FC<PostInterface> =({title,image,excerpt,date,slug})=> {
    const formatedDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${slug}/${image}`}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formatedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
