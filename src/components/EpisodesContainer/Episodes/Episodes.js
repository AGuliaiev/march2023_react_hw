import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodesActions, store} from "../../../redux";
import {episodesService} from "../../../services";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store=>store.episodes);
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        episodesService.getAll(query.get('page')).then(({data})=>dispatch(episodesActions.set(data)))
    },[])
    return (
        <div>
            Episodes
        </div>
    );
};

export default Episodes;