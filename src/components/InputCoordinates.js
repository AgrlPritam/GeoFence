import React, { Component } from 'react'

export default class InputCoordinates extends Component{
    constructor(props){
        super(props)
        this.state = {
            lat: '',
            lng: ''
        }
    }
    onLatitudeChange = (e) => {
        const lat = e.target.value
        if (!lat || lat.match(/^(-)?([\d]{1,3})(\.\d{0,6})?$/))
            this.setState(() => ({lat}))
    }
    onLongitudeChange = (e) => {
        const lng = e.target.value
        if (!lng || lng.match(/^(-)?([\d]{1,3})(\.\d{0,6})?$/))
            this.setState(() => ({lng}))
    }
    onSubmit = () => {
        this.props.onSubmit({
            lat: parseFloat(this.state.lat,10),
            lng: parseFloat(this.state.lng,10)
        })
    }

    render(){
        return (
            <div className="container">
                <input 
                    type="number"
                    placeholder="Latitude"
                    className=" input inputLatitude"
                    value={this.state.lat}
                    onChange={this.onLatitudeChange.bind(this)}
                    required
                />
                <input 
                    type="number"
                    placeholder="Longitude"
                    className=" input inputLongitude"
                    value={this.state.lng}
                    onChange={this.onLongitudeChange.bind(this)}
                    required
                />
                <button className="button submit-button" onClick={this.onSubmit} >Go</button>
            </div>
        )
    }
}