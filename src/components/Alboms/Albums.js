import React, {useEffect, useState} from 'react';
import axios from "axios";
import Album from "./Albom/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/albums')
            .then(value => {
                setAlbums(value.data)
            })
            .catch(error=> {
                console.error(error)
            })

    },[])

    return (
        <div>
           <h1>Albums</h1>
            <div>
                {albums.map(album=><Album key={album.id} album={album}/>)}
            </div>
        </div>
    );
};

export default Albums;