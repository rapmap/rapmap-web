import React, { Component } from 'react'
import Images from '../services/img.assets'

class ThugLife extends Component {
  state = {
    konamiCode: '',
    secretCode: 'volte'
  }
  
  konamiCode = event => {
    this.setState({konamiCode: this.state.konamiCode + event.key}, () => console.log(this.state.konamiCode))
    
    if (this.state.konamiCode.length > this.state.secretCode.length) {
      this.setState({konamiCode: this.state.konamiCode.slice(1, this.state.konamiCode.length)}, () => console.log(this.state.konamiCode))
    }
  }
  isThugLifeImg() {
    if (this.state.konamiCode === this.state.secretCode) {
      return 'done'
    } else {
      return ''
    }
  }

  isThugLifeAudio() {
    return this.state.konamiCode === this.state.secretCode
  }

  componentDidMount() {
    window.addEventListener('keyup', this.konamiCode)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.konamiCode)
  }

  render() {
    return (
      <>
      <div id="konami" className={`${this.isThugLifeImg()}`}>
        <img src="https://media.giphy.com/media/EIZCMrLTkVJHa/giphy.gif" alt="fuck" />
      </div>
      {this.isThugLifeAudio() && (<audio src={Images.nextepisode} autoPlay loop/>)}
      </>
    )
  }
}

export default ThugLife

