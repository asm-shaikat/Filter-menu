import React from 'react';
import './Category.css';
const Category = ({category,filterbtn}) => {
    return (
        <div className='menu-button-container'>
        {
            category.map((cat,index) =><button type="button"  key={index} onClick={()=>filterbtn(cat)}>{cat}</button>)
        }
        </div>    
    );
};

export default Category;