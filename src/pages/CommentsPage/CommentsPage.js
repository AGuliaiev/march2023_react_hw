import React from 'react';
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            Comments
            <Outlet/>
        </div>
    );
};

export default CommentsPage;