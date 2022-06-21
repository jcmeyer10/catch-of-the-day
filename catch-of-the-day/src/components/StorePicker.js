import React from 'react';

class StorePicker extends React.Component {
    render(){
        myInput = React.createRef();

        goToStore = (event) => {
            //stop the form from submitting
            event.preventDefault;

            // get the text from that input. golden rule is don't touch the DOM
            // meaning don't go out and find DOM elements for info using selectors
            // we will sync the data from the form to the 'state'` using refs
            console.log(this)

            // change the page to the store / whatever user entered

            
        }
        return (
        <React.Fragment>
        <p>Fish!</p>
        <form className='store-selector' onSubmit={this.goToStore}>
            <h2>Please Enter a Store</h2>
            <input type='text' 
            required 
            placeholder='Store Name' 
            defaultValue={getFunName()}></input>
            <button type='submit'>Visit Store</button>
        </form>
        </React.Fragment>
    )}
}

export default StorePicker;