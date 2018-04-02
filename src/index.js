import React from 'react'
import ReactDOM from 'react-dom'
import icon from './img/gachip035-23.jpg'
import './index.css'
class App extends React.Component {
  render() {
    return <div><h2 style={{color:'#fff'}}>hello webpack~!</h2><img src={icon} /></div>
  }
}
ReactDOM.render(<App />, document.getElementById('app'))