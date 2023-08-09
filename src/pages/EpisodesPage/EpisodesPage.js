import React from 'react';
import Episodes from "../../components/EpisodesContainer/Episodes/Episodes";
import EpisodesPagination from "../../components/EpisodesContainer/EpisodesPagination/EpisodesPagination";

const EpisodesPage = () => {
    return (
        <div>
            <Episodes/>
            <EpisodesPagination/>
        </div>
    );
};

export default EpisodesPage;