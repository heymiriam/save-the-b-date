import React from 'react';

const BDateCard =({name,birthday, tag, img})=>{
    <div className="bdate-card">
        <div className="tag-container">
            <button className="tag">{tag}</button>
        </div>
        <div classname="avatar" style={{backgroundImage: `url(${img})`}}>{img}</div>
        <h3 className="name">{name}</h3>
        <p className="birthday">{birthday}</p>
    </div>
}
 
export default BDateCard;