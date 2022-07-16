import React, { useState } from 'react';
import data from './data';
import Items from './items/Items';
import {Link} from 'react-router-dom';
import Navbar from './navbar/Navbar';
const Home = () => {
    const [items,setitem] = useState(data);
    return (
        <>
            <Navbar></Navbar>
           {
               items.map(snd => <Items items={snd}></Items>)
           }
        </>
    );
};

export default Home;