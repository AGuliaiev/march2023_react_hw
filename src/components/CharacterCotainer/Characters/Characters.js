import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {charactersService} from "../../../services";
import {useLocation} from "react-router-dom";
import {charactersActions} from "../../../redux";
import Character from "../Character/Character";
import css from './Character.module.css'
const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state:{ids}} = useLocation();

    useEffect(() => {
        charactersService.getByIds(ids).then(({data}) => {
            dispatch(charactersActions.set(data))
        })
    },[])

    return (
        <div className={css.Character}>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};


export default Characters;