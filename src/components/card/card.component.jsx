import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.style.scss';

const Card = ({ title, imageUrl, size, history, linkUrl, match }) => (
                <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

                    <div  style={{  
                    backgroundImage: `url(${imageUrl})`
                }} />
                    <div className='content'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitile'> Get Iphone 8 </span>
                    </div>
                
                </div>


)

export default withRouter(Card);