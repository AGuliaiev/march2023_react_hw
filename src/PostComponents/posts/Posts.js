import React, {useEffect} from 'react';
import axios from "axios";
import Post from "./post/Post";

const Posts = ({posts, setPosts}) => {
    useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => setPosts(response.data))
        .catch((error) => console.log(error));

    },[])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;