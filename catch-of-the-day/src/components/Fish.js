import React from 'react';
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    render(){
        // const image = this.props.details.image;
        // const name = this.props.details.name;

        const {name, image, price, desc, status} = this.props.details;

        return (
            <React.Fragment>
                <li className='menu-fish'>
                    <img src={image} alt={name}></img>
                    <h3 className='fish-name'>
                        {name}
                        <span className='aprice'>{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button>Add to Cart</button>
                </li>
            </React.Fragment>
        )
}
}

export default Fish;