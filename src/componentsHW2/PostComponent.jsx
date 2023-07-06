import React from 'react';

const PostComponent = (props) => {
    const { post, handleClick } = props;
 return (
        <div>

                <h4>ID: {post.id}</h4>
                <h4>Title: {post.title}</h4>

                <button onClick={()=>handleClick(post.body)}>Show details</button>

        </div>
    );
};

export default PostComponent;