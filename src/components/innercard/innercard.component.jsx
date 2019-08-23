import React from 'react';
import Card from '../../components/card/card.component';

import './innercard.style.scss';


class InnerCard extends React.Component {
    constructor() {
        super()
       this.state = {
            sections:[
                {
                    title: 'Iphone 10',
                    imageUrl: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 1,
                  },
                  {
                    title: 'Iphone 8',
                    imageUrl: 'https://zdnet4.cbsistatic.com/hub/i/2018/10/31/3f11dc70-5c4d-40a9-bcae-ff1994ca2e18/a2fa4e4583330af9dd1fb013891c048a/iphone-x-vs-xr.jpg',
                    id: 2,
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                  }
            ]
       } 
    }

    render() {
        return (
            <div className="directory-menu">
                    {
                        this.state.sections.map(({title, imageUrl, id, size}) => (
                            <Card key={id}  title={title}  imageUrl={imageUrl} size={size}/>
                        ))
                    }
            </div>
        );
    }
    
 
}

export default InnerCard;