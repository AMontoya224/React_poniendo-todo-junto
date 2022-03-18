import './PersonCard.css'
import React, { Component } from 'react';


    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : this.props.firstName,
            lastName : this.props.lastName,
            hairColor : this.props.hairColor,
            age : this.props.age
        }
    }

    aumentarEdad(){
        this.setState( {
            age : this.state.age + 1
          } )
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.lastName}, {this.state.firstName}
                </h1>
                <h4>
                    Age: <b>{this.state.age}</b>
                </h4>
                <h4>
                    Hair color: <b>{this.state.hairColor}</b>
                </h4>
                <button onClick={() => this.aumentarEdad()}>
                    Birthday Button for {this.state.firstName} {this.state.lastName}
                </button>
            </div>
        );
    }
}
    
export default PersonCard;
