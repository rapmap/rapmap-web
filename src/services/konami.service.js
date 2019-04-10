import React from 'react'
import Konami from 'react-konami-code'
 
export default class App extends React.Component {
  easterEgg = () => {
    return(<p>hola</p>)
  }
 
  render = () => (
    <Konami action={this.easterEgg} />
      
  )
}
