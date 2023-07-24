import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Context} from "../../../pages";


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    const navigate= useNavigate();
    const setCommentId = useContext(Context);
    const handleClick = () => {
        navigate(`post/${postId}`);
        setCommentId(id)
    };
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={handleClick}>getPost</button>
        </div>
    );
};

export {Comment};