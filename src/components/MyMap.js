import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    // shadowUrl: iconShadow,
    iconSize: [28, 40],
    iconAnchor: [14, 20]
});

L.Marker.prototype.options.icon = DefaultIcon;

class MyMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 40.41,
      lng: -3.69,
      zoom: 13
    }
  }

  getRightCoordinates = ({ coordinates }) => coordinates && [coordinates[1], coordinates[0]]

  render () {
    const position = [this.state.lat, this.state.lng]
    const { rapperList } = this.props
    console.log('props', this.props)
    return (
      <Map center={position} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          rapperList.map(({ name, location }, index) => {
            if(index < 5) {
              return (
                <Marker key={index} position={this.getRightCoordinates(location)}> {/* Ñapa! */}
                  <Popup>
                    <p>{name}</p>
                  </Popup>
                </Marker>
              )
            }
          })
        }
        {/* {this.props.rapperList.map((rapper, index) => {
          return (
            <Marker key={index} position={rapper.location.coordinates}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          )
        })} */}
      </Map>
    )
  }
}

export default MyMap


