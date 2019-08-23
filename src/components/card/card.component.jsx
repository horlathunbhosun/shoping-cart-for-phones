import React from 'react';

import './card.style.scss';

const Card = ({ title, imageUrl, size }) => (
                <div className={`${size} menu-item`}>

                    <div  style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                    <div className='content'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitile'> Get Iphone 8 </span>
                    </div>
                
                </div>


)

export default Card;