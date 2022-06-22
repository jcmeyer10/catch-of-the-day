import React from 'react';

class AddFishForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = e => {
        // stop the form from submitting
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
    }

    render(){
        return (
            <React.Fragment>
                <form className='fish-edit' onSubmit={this.createFish}>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name"></input>
                    <input price="price" ref={this.priceRef} type="number" placeholder="Price"></input>
                    <select status="status" ref={this.statusRef}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea desc="desc" ref={this.descRef} placeholder="Desc"></textarea>
                    <input image="image" ref={this.imageRef} placeholder="Image"></input>
                    <button type="submit">+ Add Fish</button>
                </form>
            </React.Fragment>
        )
}
}

export default AddFishForm;