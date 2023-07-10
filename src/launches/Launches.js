import React, {useEffect, useState} from 'react';
import Launch from "./launch/Launch";

const Launches = () => {

    const [launches, setLaunch] = useState([]);
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json()).then(value => {
                const filter = value.filter(item=>item.launch_year !== '2020');
            setLaunch(filter)
            })
    }, [])
    return (
        <div>
            {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export default Launches;