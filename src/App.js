import React, { Component } from 'react';
import MyMap from './components/MyMap';
import Header from './components/Header';
import ThugLife from './components/ThugLife'
import RapperList from './components/RapperList';
import { getRappersList } from './services/base.Service'
import MainRapMap from './components/MainRapMap';


class App extends Component {

  state = {
    rapperList: [],
    rapperListVisibility: false,
    konamiCode: []
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
        <div className="App">
          <MainRapMap />
          <Header toggleListVisibility={this.toggleListVisibility} />
          <RapperList {...this.state} />
          <MyMap rapperList={rapperList} />
          <ThugLife />
        </div>
      </>
    );
  }
}

export default App;
