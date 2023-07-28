// import React from 'react';
// import css from './Muvies.module.css'
// import { useNavigate} from "react-router-dom";
//
// const MoviesDetails = ({info}) => {
//     console.log(info)
//        const {
//         title,
//         original_language,
//         overview,
//         popularity,
//         poster_path,
//         genres} = info;
//     const genresStr = genres.map(genre => genre.name).join(', ');
//     const navigate = useNavigate();
//
//
//
//     return (
//         <div>
//
//             <div className={css.wrapper}>
//                 <a onClick={()=>navigate('/poster/:id')} > <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} /></a>
//
//                 <div className={css.Info}>
//                 <h1>{title}</h1>
//                 <p>Genres: {genresStr}</p>
//                 <p>Overview: {overview}</p>
//                 <p>Popularity: {popularity}</p>
//                 <p>Original Language: {original_language}</p>
//
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MoviesDetails;
import React, { useState } from 'react';
import css from './Muvies.module.css';


const MoviesDetails = ({ info }) => {
    const {
        title,
        original_language,
        overview,
        popularity,
        poster_path,
        genres,
    } = info;
    const genresStr = genres.map((genre) => genre.name).join(', ');
    const [showImageOnly, setShowImageOnly] = useState(false);

    return (
        <div>
            <div className={css.wrapper}>
                {showImageOnly ? (
                    <img className={css.Post}
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        onClick={() => setShowImageOnly(false)}
                    />
                ) : (
                    <a onClick={() => setShowImageOnly(true)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={title}
                        />
                    </a>
                )}

                {!showImageOnly && (
                    <div className={css.Info}>
                        <h1>{title}</h1>
                        <p>Genres: {genresStr}</p>
                        <p>Overview: {overview}</p>
                        <p>Popularity: {popularity}</p>
                        <p>Original Language: {original_language}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesDetails;
