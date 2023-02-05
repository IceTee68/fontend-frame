import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
const[posts, setPosts] = useState('');
const [loading, setLoading] = useState(true);

    useEffect (() => {
    console.log("call eff");
    fetchPost();
  },[]);

  const fetchPost = async () => {
    try {
        console.log("fetchPost");
        const response = await axios.get("https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article");
        if(response.status === 200) {
            setPosts(response.data);
            setLoading(false);
            console.log(response)
        }
    }catch(error) {
        console.error(error);
    }
  }
  if(posts.length === 0) {
    return <div className="loader"></div>
  }
    return (
        <div className="posts">
        {posts.map((post)=>{
        return(
            <div key={post.id} className="post">
                {/* <p>{post.name}</p> */}
                <img src={post.picture} alt="" />
            </div>
        );
    })}
        </div>
     ) ;
    
    
}
export default Post;