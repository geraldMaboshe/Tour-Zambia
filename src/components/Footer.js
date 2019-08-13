import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div class='Footer'>
                <p style={pStyle}>&copy; 2019. SICT</p>
            </div>
        )
    }
}

export default Footer
const pStyle ={
    textAlign: 'center',
    padding: '30px'
}