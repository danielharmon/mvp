import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.search ? props.search : {
      quote: '',
      author: '',
      tags: []
    };
  }
  render() {
    return (
      <div className="search" >
        <form>
          <input type="text" placeholder="Quote Includes..." value={this.state.quote} onChange={(e) => this.setState({ quote: e.target.value })}></input>
          <input placeholder="Author" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })}></input>
          <input type="submit" onClick={() => props.onClick(this.state)}></input>
        </form>
      </div>)
  }
}
export default SearchBar;