import React, { Component } from 'react';
import EasterEgg from 'react-easter'
 
 
export default class ThugLife extends React.Component {
  render() {
    const konamiCode = [
      'h',
      'o',
      'l',
      'a',
      ];
 
    return (
      <EasterEgg keys={konamiCode}>
        <div className="overlay">
        <p className="">hola</p>
        </div>
      </EasterEgg>
    );
  }
}














// import React, { Component } from 'react'

// class ThugLife extends Component {
//   state = {
//     konamiCode: []
//   }
//   konamiCode = event => {
//     const secretCode = 'volte'
//     this.setState({ konamiCode: [...this.state.konamiCode, event.key] }, () => console.info('KONAMI => ', this.state.konamiCode))
//     const isThugLife = this.state.konamiCode.filter(value => -secretCode.length - 1, value.length - secretCode.length)
      

// 		if(isThugLife.join('').includes(secretCode)) {
// 			const getKonami = document.getElementById("konami")
// 			getKonami.classList.add("done");
// 			console.log('ding ding')
// 		}
//   }
  
//   componentDidMount() {
//     window.addEventListener('keyup', this.konamiCode)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.konamiCode)
//   }
//   render() {
//     return (
//       <div id="konami">
//         <video loop autoplay>
//           <source src="https://media.giphy.com/media/EIZCMrLTkVJHa/giphy.mp4" type="video/mp4" />
//         </video>
//       </div>
//     )
//   }
// }

// export default ThugLife

