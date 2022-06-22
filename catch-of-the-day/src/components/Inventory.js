import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className='inventory'>
                    <h2>Inventory</h2>
                    <AddFishForm addFish={this.props.addFish} />
                </div>
            </React.Fragment>
        )
}
}

export default Inventory;