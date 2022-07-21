import React from 'react';
import PropTypes from 'prop-types'
import { formatPrice } from "../helpers";

class Fish extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index); 
    }

    static propTypes = {
        addToOrder: PropTypes.func,
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        })
    }

    render(){
        // const image = this.props.details.image;
        // const name = this.props.details.name;

        const {name, image, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';

        return (
            <React.Fragment>
                <li className='menu-fish'>
                    <img src={image} alt={name}></img>
                    <h3 className='fish-name'>
                        {name}
                        <span className='price'>{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button disabled={!isAvailable}
                    onClick={this.handleClick}>
                        {isAvailable ? 'Add to Cart' : 'Sold Out'}
                    </button>
                </li>
            </React.Fragment>
        )
}
}



export default Fish;