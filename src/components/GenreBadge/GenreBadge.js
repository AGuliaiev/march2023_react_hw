import React, {useEffect, useState} from 'react';
import axios from "axios";
import Genre from "./Genre";
import css from './Gener.module.css'

const GenreBadge = () => {
    const [genres, setGenre] = useState([]);
    useEffect(()=> {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then(({data})=> setGenre(data.genres))
            .catch((error) => console.error(error));

    },[])

    return (
        <>
            <h1>Geners</h1>
            {genres.map(gener=><Genre key={gener.id} gener={gener}/>)}
        </>
    );
};

export default GenreBadge;