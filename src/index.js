import React from 'react'
import ReactDOM from 'react-dom'
import icon from './img/gachip035-23.jpg'
import './index.css'
class App extends React.Component {
  render() {
    return <div>hello webpack~!<img src={icon} /></div>
  }
}
ReactDOM.render(<App />, document.getElementById('app'))