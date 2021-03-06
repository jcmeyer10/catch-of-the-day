import React from 'react';
import PropTypes from 'prop-types'


class EditFishForm extends React.Component {

    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func,
    }

    handleChange = (event) => {
        console.log(event.currentTarget.value);
        // we need to pass this state up through inventory, to the app component where state lives
        // 1. update the fish, take a copy of the current fish
        // 2. ovewrite the current value being changed by referencing "name"

        const updatedFish = {
        ...this.props.fish,
        [event.currentTarget.name]: event.currentTarget.value
        }    
        this.props.updateFish(this.props.index, updatedFish)
    }
    render(){
        return (
            <React.Fragment>
                <div className='fish-edit'>
                <input 
                    type='text' 
                    name='name' 
                    onChange={this.handleChange} 
                    value={this.props.fish.name}
                />
                <input 
                    type='number' 
                    name='price' 
                    onChange={this.handleChange} 
                    value={this.props.fish.price} 
                />
                <select status="status" ref={this.statusRef}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                 </select>
                <input 
                    type='text' 
                    name='desc' 
                    onChange={this.handleChange} 
                    value={this.props.fish.desc} 
                />
                <input 
                    type='text' 
                    name='image' 
                    onChange={this.handleChange} 
                    value={this.props.fish.image} 
                />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
                </div>
            </React.Fragment>
        )
}
}

export default EditFishForm;