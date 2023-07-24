import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../service";
import {PostDetail} from "../PostDetail/PostDetail";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();
    console.log(postId)

    useEffect(() => {
        postsService.getById(postId).then(({data})=>setPost(data))
    },[postId])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export { Post};