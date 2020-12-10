import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    data: [],
    backgroundImageSrc: ''
  };
}
componentDidMount() {

render() {
  return (
    <div>
      <h1>Quotes I Love</h1>
      <form>
        <label></label>
        <input type="text"></input>
        <input type="text"></input>
      </form>
    </div>

  )
}
}

ReactDOM.render(<App/>, document.getElementbyId('app'))