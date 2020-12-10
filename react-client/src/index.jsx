import React from 'react'
import ReactDOM from 'react-dom'
import EditForm from './components/EditForm.jsx'
import AuthorList from './components/AuthorList.jsx'
import quotes from '../../exampleData.js'
import SearchBar from './components/SearchBar.jsx'
var $ = require('jquery')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      currentQuote: {
        quote: '',
        author: '',
        tags: [],
        context: ''
      },
      tab: 'Edit',
      search: {
        quote: "",
        author: "",
        tags: [],
        context: ''
      }
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onQuoteClick = this.onQuoteClick.bind(this);
    this.onTabClick = this.onTabClick.bind(this)
  }
  onTabClick(e) {
    $('#'+this.state.tab).removeClass('active');
    $(e.target).addClass('active');
    this.setState({ tab: e.target.innerHTML });
  }
  onQuoteClick(quote) {
    return (
      <div className="quoteDetails">
        <ul>
          <li>{quote.author}</li>
          <li>{quote.tags.join(',')}</li>
        </ul>
      </div>
    )
  }
  onEditClick(e, quoteToEdit) {
    console.alert('todo: make a call to the patch route using :', quotetoEdit)

    e.preventDefault();
    //Make a call to the patch route
  }
  componentDidMount() {
  }

  render() {

    return (
      <div>
        <div className="navbar">
          <button id="Quotes" onClick={(e)=>this.onTabClick(e)}>Quotes</button><button id="Edit" onClick={(e)=> this.onTabClick(e)}>Create/Edit</button>
        </div>
        {/* <AuthorList /> */}
        <EditForm quote={this.state.currentQuote} onClick={this.onEditClick}/>
        {/* {this.state.tab === 'Create/Edit' ? <EditForm/> : <QuotesList />} */}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))