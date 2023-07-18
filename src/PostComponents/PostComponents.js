import React, {useState} from 'react';
import Posts from "./posts/Posts";
import FormPost from "./formPosts/FormPost";

const PostComponents = () => {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            <Posts posts={posts} setPost={setPosts()}/>
            <br/>
            <FormPost setPost={setPosts()}/>
        </div>
    );
};

export default PostComponents;