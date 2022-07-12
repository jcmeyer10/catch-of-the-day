import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
    // methods that update state and where state is stored have to be on
    // the same component

    state = {
        fishes: {},
        order: {}
    }

    componentDidMount(){
        //first reinstate local storage
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId)

        //checking for new store
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }

        // different ref directly related to firebase
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })

        console.log(`${this.props.match.params.storeId}/fishes`)
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
        console.log(this.state.order);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // take a copy of existing state, 
        //never write directly to state (mutation)
        // use object spread (... to get current state
        // then add the new fish to the copy of state
        // give timestamp for unique value to avoid having to use an array
        const fishes = {...this.state.fishes}

        fishes[`fish${Date.now()}`] = fish;

        //set new fishes object to state

        this.setState({
            fishes: fishes
        })

    }

    loadSampleFishes = () => {
        console.log("click")
        this.setState({fishes: sampleFishes })
    }

    addToOrder = (key) => {
        // 1. take a copy of the fishes
        const order = {...this.state.order}

        // 2. Either add to the order or the number in our order
        order[key] = order[key] + 1 || 1;

        // 3. call setState to update state object
        this.setState( {order } )
    }

    // if you need key twice in the same map, you need to create a new variable and set it to key

    render(){
        return(
            <div className="catch-of-the-day">
                <div className='menu'>
                    <Header tagline="Fress Seafood Market"/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key => <Fish 
                        key={key}
                        index = {key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                        />)}
                    </ul>
                </div>
                
                <Order fishes={this.state.fishes} order={this.state.order}/>

                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}     
                />

            </div>
        )
    }
}

export default App;