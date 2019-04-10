import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import MyMap from './components/MyMap';
import Header from './components/Header';
import RapperList from './components/RapperList';
import { getRappersList } from './services/base.Service'


class App extends Component {

  state = {
    rapperList: [],
    rapperListVisibility: false,
  }

  componentDidMount() {
    getRappersList()
      .then(rapperList => this.setState({ rapperList }))
      
  }

  toggleListVisibility = () => this.setState({ rapperListVisibility: !this.state.rapperListVisibility })

  render() {
    
    const { rapperList, rapperListVisibility } = this.state
    return (
      
      <> 
      {/* <Helmet>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"/>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"/>
      </Helmet> */}
      <div className="App">
        <Header toggleListVisibility={this.toggleListVisibility} />
        <RapperList {...this.state} />
        <MyMap rapperList={rapperList} />
      </div>
      </>
    );
  }
}

export default App;
