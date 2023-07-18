import React, {useEffect} from 'react';
import axios from "axios";
import Post from "./post/Post";

const Posts = ({posts, setPost}) => {
    useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(value => setPost(value))
    },[])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;