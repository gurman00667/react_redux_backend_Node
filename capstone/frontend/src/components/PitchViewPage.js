import React from 'react';
import InputEntrepneursSummury from './InputEntrepneursSummury'

export default class PitchViewPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div style={containerStyle}>
                    <header style={headerStyle}>Summury</header>
                </div>
                <br />
                <InputEntrepneursSummury />
            </div>
        )
    }
}

const headerStyle = {
    backgroundColor: '#404447',
    width: '100%',
    height: 50,
    color: '#dee0e2',
    padding: 10
}

const containerStyle = {
    margin: 0,
    padding: 0,
    margin: 'auto'
}