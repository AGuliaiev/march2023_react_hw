import React from 'react';

import GenreList from "../../components/GenreBadge/genreList/GenreList";
import {Outlet} from "react-router-dom";

const GenrePage = () => {
    return (
        <>
            <GenreList/>

        </>
    );
};

export default GenrePage;