import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDirectory = path.join(process.cwd(),'posts')
function getPostData(fileName){
    const filePath = path.join(postsDirectory,fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data,content} = matter(fileContent)
    const postSlug = fileName.replace(/\.md$/,'') //removes the file extenstion
    const postData = {
        slug : postSlug,
        ...data,
        content:content

    }
    return postData
}
function getAllPost(){
    const postFiles = fs.readdirSync(postsDirectory)
    const allPost = postFiles.map(postFile=>{
        return getPostData(postFile)
     })
    const sortedPost = allPost.sort((postA,postB)=>postA.date > postB.date ? -1 : 1);
    return sortedPost
}
function getFeaturedPosts(){
    const allPost = getAllPost()
    const featuredPosts = allPost.filter(post=>post.isFeatured )
    return featuredPosts
}
export {getAllPost,getFeaturedPosts}