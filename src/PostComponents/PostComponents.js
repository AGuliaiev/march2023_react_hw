import React, {useState} from 'react';
import Posts from "./posts/Posts";
import FormPost from "./formPosts/FormPost";

const PostComponents = () => {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            <FormPost setPost={setPosts}/>
            <br/>
            <Posts posts={posts} setPosts={setPosts}/>

        </div>
    );
};

export default PostComponents;