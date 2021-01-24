import React, { Component } from 'react'
import { Map, TileLayer, Polygon, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {VenueLocationIcon} from './VenueLocationIcon';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      zoom: 12
    }
  }

  addMarker = (e) => {
    const lat = e.latlng.lat
    const lng = e.latlng.lng
    const newMarkers = [lat, lng ]
    console.log("You clicked the map at LAT: "+ lat+" and LONG: "+lng)
    this.setState(prevState=> (
      {
        markers: [...prevState.markers, newMarkers]
      }
    ), () => {
      if(this.props.onChange){
        this.props.onChange(newMarkers)
      }
    })
  }

  removeMarker=(e) => {
    const lat = e.latlng.lat
    const lng = e.latlng.lng
    const removeMarker = [lat, lng]
    this.setState({
        markers: this.state.markers.filter(marker => (marker[0] !== removeMarker[0] && marker[1] !== removeMarker[1])) 
    })
  }

  render() {
    const { zoom } = this.state

    return (
      <Map center={this.props.location[this.props.location.length-1] || [ 12.9716, 77.5946 ]} zoom={zoom} onclick={this.addMarker}  >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Polygon positions={this.state.markers} />
        {this.state.markers.map((position, idx) =>
        <Marker key={`marker-${idx}`} position={position} icon={VenueLocationIcon} onClick={this.removeMarker} draggable />
        )}
      </Map>
    )
  }
}

export default MapView;
