import React from 'react';

class EditFishForm extends React.Component {

    render(){
        return (
            <React.Fragment>
                <input type='text' name='name' />
                <input type='text' name='price' />
                <input type='text' name='status' />
                <input type='text' name='desc' />
                <input type='text' name='image' />

            </React.Fragment>
        )
}
}

export default EditFishForm;