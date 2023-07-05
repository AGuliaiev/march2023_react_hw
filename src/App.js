import React from 'react';
import Character from "./components/character/Character";

const App = () => {
    return (
        <div>
            <Character id={1} name={'Rick Sanchez'} status={"Alive"} species={"Human"} gender={"Male"} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
            <Character id={425} name={'Pizza-person'} status={"Alive"} species={"Humanoid"} gender={"Male"} image={'https://rickandmortyapi.com/api/character/avatar/425.jpeg'}/>
            <Character id={582} name={'Anchosnake'} status={"Alive"} species={"Animal"} gender={"Female"} image={"https://rickandmortyapi.com/api/character/avatar/582.jpeg"}/>
            <Character id={28} name={"Attila Starwar"} status={"Alive"} species={"Alien"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/28.jpeg"}/>
            <Character id={765} name={'Native Alien'} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/765.jpeg"}/>
            <Character id={84} name={'Cult Leader Morty'} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/84.jpeg"}/>


        </div>
    );
};

export default App;