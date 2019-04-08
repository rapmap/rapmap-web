import React, { Component } from 'react'


class Search extends Component {
  constructor(){
    super();
    this.state ={
      rappers: ['abc',"pdsa","eccs","koi"],
      input: '',
    }
  }

  onChangeHandler(e){
    this.setState({
      input: e.target.value,
    })
  }

  render (){
      const list = this.state.rappers
        .filter(d => this.state.input === '' || d.includes(this.state.input))
        .map((d, index) => <li key={index}>{d}</li>);

    return (
      <div>
        <form>
          <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
          <ul>{list}</ul>
        </form>
      </div>
    )
  }
}

export default Search