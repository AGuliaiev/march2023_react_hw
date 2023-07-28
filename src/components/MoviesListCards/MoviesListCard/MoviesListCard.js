import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import MoviesDetails from "./MoviesDetails";


const MoviesListCard = () => {
    const [card, setCard] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1&include_adult=false`)
            .then(({data})=>setCard(data))



    },[])

    return (
        
        <div>

            {card && <MoviesDetails info={card}/>}
        </div>
    );
};

export default MoviesListCard;