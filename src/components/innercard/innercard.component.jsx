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
                    linkUrl: 'iphones'
                  },
                  {
                    title: 'Iphone 8',
                    imageUrl: 'https://zdnet4.cbsistatic.com/hub/i/2018/10/31/3f11dc70-5c4d-40a9-bcae-ff1994ca2e18/a2fa4e4583330af9dd1fb013891c048a/iphone-x-vs-xr.jpg',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                    linkUrl: ''
                  }, 
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                  }
            ]
       } 
    }

    render() {
        return (
            <div className="directory-menu">
                    {
                        this.state.sections.map(({id, ...otherSectionProps }) => (
                            <Card key={id}  {...otherSectionProps}/>
                        ))
                    }
            </div>
        );
    }
    
 
}

export default InnerCard;