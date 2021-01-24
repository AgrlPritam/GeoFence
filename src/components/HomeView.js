import React, { Component } from 'react'
import MapView from './MapView'
import InputCoordinates from './InputCoordinates'

export default class HomeView extends Component{
    constructor(props){
        super(props)
        this.state = {marker: []}
    }
    
    onSubmit = (coordinates) => {
        const newMarkers = [coordinates.lat,coordinates.lng ]
        this.setState(prevState=> (
            {
              marker: [...prevState.marker, newMarkers]
            }
        ))
    }
    handleClickedCoordinates = (coordinates) => {
        this.setState(prevState => (
            {
                marker: [...prevState.marker, coordinates]
            }
        ))
    }
    render(){
        return (
            <div>
                <MapView location={this.state.marker} onChange={this.handleClickedCoordinates} />
                <InputCoordinates onSubmit={this.onSubmit}/>
                    {this.state.marker.map((position, index) =>
                    <p key={`marker-${index}`}>Co-Ordinates are Latitude: {position[0].toFixed(4)} and Longitude: {position[1].toFixed(4)}</p>)}
            </div>
        )
    }
}