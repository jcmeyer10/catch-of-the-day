import React from 'react';
import { getFunName } from "../helpers"
import PropTypes from 'prop-types'

class StorePicker extends React.Component {
    myInput = React.createRef();
    
    static propTypes = {
        history: PropTypes.object
    }

    goToStore = (event) => {
        //stop the form from submitting
        event.preventDefault;

        // get the text from that input. golden rule is don't touch the DOM
        // meaning don't go out and f   ind DOM elements for info using selectors
        // we will sync the data from the form to the 'state'` using refs
        const storeName = this.myInput.current.value

        // change the page to the store / whatever user entered
        this.props.history.push(`/store/${storeName}`)

    }

    render(){
        return (
        <React.Fragment>
        <p>Fish!</p>
        <form className='store-selector' onSubmit={this.goToStore}>
            <h2>Please Enter a Store</h2>
            <input type='text' 
            ref={this.myInput}
            required 
            placeholder='Store Name' 
            defaultValue={getFunName()}></input>
            <button type='submit'>Visit Store</button>
        </form>
        </React.Fragment>
    )}
}

export default StorePicker;