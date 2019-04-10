import React from 'react'
import { Map, Marker, Popup, TileLayer, FeatureGroup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

// import { EditControl } from "react-leaflet-draw"

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
      <Map className="markercluster-map" center={position} zoom={3} maxZoom={15}>

        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}"
          attribution= 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          ext= 'png'
        />
        <MarkerClusterGroup>
        {
          rapperList.map(({ imageURL, name, location, genre, bio }, index) => {
            // if(index < 5) {
              return (
                
                <Marker key={index} position={this.getRightCoordinates(location)}> {/* Ñapa! */}
                  <Popup>
                    <div class="infopopup">
                    <h2>{name}</h2>
                      <div>
                        <img src={imageURL} alt='.' />
                      </div>
                      <p>{genre}</p>
                      {/* <p>{bio}</p> */}
                    </div>
                  </Popup>
                </Marker>
               
                
              )
            }
          // }
          )
        }
        </MarkerClusterGroup>
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


