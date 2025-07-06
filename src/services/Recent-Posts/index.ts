import  envConfig  from "../../config/envConfig"

const getRecentPosts = async()=>{
       const res = await fetch(`${envConfig.baseApi}/found-items?limit=4`)
 const posts = await res.json()
 return posts
}
export default getRecentPosts