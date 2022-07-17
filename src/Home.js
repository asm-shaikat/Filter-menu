import React, { useState } from 'react';
import data from './data';
import Items from './items/Items';
import Category from './category/Category';
const allcategories = ['all',...new Set(data.map((cat) => cat.category))];
const Home = () => {
    // const [items,setitem] = useState(data);
    const [category,setcategory] = useState(allcategories);
    const [menuitem,setmenuitem] = useState(data);
    const filterbtn=(category)=>{
        if(category==='all'){
            setmenuitem(data);
            return;   
        }
        else {
            const newitem = data.filter((item) => item.category === category);
            setmenuitem(newitem);
            console.log(menuitem);
        }
    }
    return (
        <>

            <Category category={category} filterbtn={filterbtn}></Category>

           {
                menuitem.map(snd => <Items items={snd}></Items>)
           }
        </>
    );
};

export default Home;