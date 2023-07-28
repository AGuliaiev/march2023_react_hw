// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import Poster from "./Poster";
// import css from './Posters.module.css'
//
//
// const PosterPreview = () => {
//     const [posters, setPosters] = useState([]);
//
//
//
//     useEffect(() => {
//         const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
//         axios
//
//             .get(`https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}/videos`)
//             .then(({ data }) => setPosters(data.results))
//             .catch((error) => console.error(error));
//     }, []);
//
//
//
//
//     return (
//         <div className={css.Post}>
//
//             {posters.map(poster=> <Poster key={poster.id} poster={poster} />)}
//         </div>
//     );
// };
//
// export default PosterPreview;
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Poster from "./Poster";
import css from './Posters.module.css';

const PosterPreview = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
        axios
            .get(`https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}/videos?api_key=${apiKey}&language=en-US`)
            .then(({ data }) => setVideos(data.results))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={css.Post}>
            {videos.map((video) => <Poster key={video.id} video={video} />)}
        </div>
    );
};

export default PosterPreview;