import React, { Component } from 'react';
import Background from './../images/falls.jpeg'; // with import

export class Section extends Component {
    render() {
        return (
            <div style = {mainStyle}>
               <h1>Welcome to Zambia</h1>
               <em>Home for natural wonders and diverse culture</em>
            </div>
        )
    }
}

export default Section
const mainStyle = {
    width: '100%',
    backgroundSize: 'cover',
    height: '500px',
    padding: '100px 50px',
    color: 'blue',
    backgroundImage: `url(${Background})`
}