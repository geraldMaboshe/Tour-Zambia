import React, { Component } from 'react';
import pic from './../images/falls.jpeg'; // with import

export class Section extends Component {
    render() {
        return (
            <div>
               <img src={pic} />
            </div>
        )
    }
}

export default Section
