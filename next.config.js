/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
module.exports = (phase)=> {
  if(phase===PHASE_DEVELOPMENT_SERVER){
    return{
      reactStrictMode: true,
      env:{
        mongodb_usernamme:'admin',
        mongodb_password:'s2Pj3Lj8v2PhrdJ',
        mongodb_clustername:'cluster0',
        mongodb_database:'blog-dev'
      }
    }
  }
  return{
    reactStrictMode: true,
    env:{
      mongodb_usernamme:'admin',
      mongodb_password:'s2Pj3Lj8v2PhrdJ',
      mongodb_clustername:'cluster0',
      mongodb_database:'blog'
    }
  }

}
