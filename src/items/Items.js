import React from 'react';
import './items.css';
const Items = (rec) => {
    const { id, title, price, image, description } = rec.items
    return (
        <>
            <div className="all-items">
                <div className="img-frame">
                    <img src={image} alt="" />
                </div>
                <p>{title}</p>
                <p><b><small style={{color: 'red'}}>{price} TK</small></b></p>
                <p>{description}</p>
            </div>
        </>
    );
};

export default Items;