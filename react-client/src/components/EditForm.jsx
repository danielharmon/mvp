import React from 'react'

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.quote
  }

  render() {

    return (
      <div>
        <h1>Hello</h1>
        <form>
          <label>Who said it?</label><br></br>
          <input type="text" id="author" placeholder="Name..."value={this.state.author}onChange={(e)=>this.setState({author: e.target.value})}></input><br></br>
          <label>What'd they say?</label><br></br>
          <input type="text" id="quote" placeholder="Quote..." value={this.state.quote}onChange={(e)=>this.setState({quote: e.target.value})}></input><br></br>
          <label>Explain the circumstances</label><br></br>
          <input type="text" id="context" placeholder="Context..." value={this.state.context}onChange={(e)=>this.setState({context: e.target.value})}></input><br></br>
          <label>Attach comma serarated tags</label><br></br>
          <input type="text" id="tags" placeholder="funny, inspirational, children" value={this.state.tags.join(',')}onChange={(e)=>this.setState({tags: e.target.value.split(',')})}></input><br></br>
          <br></br>
          <input type="submit" id="submit" onClick={(e) => props.onClick(e, this.state)} value={'Edit'}></input>
        </form>
      </div>)
  }
}

export default EditForm