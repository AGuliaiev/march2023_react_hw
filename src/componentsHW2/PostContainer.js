import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent";

const PostContainer = () => {

    const [ posts, setPosts ] = useState([]);
    const [ selectedPost, setSelectedPost ] = useState(null);
     useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);

            })
            .catch();

    },[]);

const handleClick = (post)=> {
setSelectedPost(post.body);
    console.log(post)
  }
    return (

        <div>
            {selectedPost && (
                <p>{selectedPost.post}</p>
            )}

            {posts.map((post)=> (
                    <PostComponent
                        key={post.id}
                        post={post}
                        handleClick={handleClick}

   />))}

        </div>
    );

};

export default PostContainer;