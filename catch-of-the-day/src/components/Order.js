import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key]
        const count = this.props.order[key]
        // make sure the fish are loaded or we continue
        if (!fish) {
            return null;
        }
        const isAvailable = fish.status === 'available';
        if (!isAvailable) {
            <li key={key}>
                return Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        }
        return (
            <li key={key}>
                {count}lbs {fish.name}
                {formatPrice(count * fish.price)}
                <button onClick={() => this.props.removeOneItem(key)}>-</button>
                <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
            </li>
        )
    } 

    render(){
        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce((previousValue, key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        if (isAvailable) {
            return previousValue + (count * fish.price)
    }
}, 0);
        return (
            <React.Fragment>
                <div className='order-wrap'>
                    <h2>Order!!!</h2>
                    <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
                    <div className='total'>
                        Total
                        <strong>{formatPrice(total)}</strong>
                    </div>
                </div>
            </React.Fragment>
        )
}
}

export default Order;