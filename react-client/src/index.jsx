import React from 'react'
import ReactDOM from 'react-dom'
import EditForm from './components/EditForm.jsx'
import AuthorList from './components/AuthorList.jsx'
import quotes from '../../exampleData.js'
import SearchBar from './components/SearchBar.jsx'
import QuotesList from './components/QuotesList.jsx'

import './styles.css'

var qs = require('qs')
var axios = require('axios')
var $ = require('jquery')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuote: {
        quote: '',
        author: '',
        tags: [],
        context: ''
      },
      tab: 'Edit',
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onNewClick = this.onNewClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onQuoteClick = this.onQuoteClick.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.onCreateClick = this.onCreateClick.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this)
    this.onQuoteChange = this.onQuoteChange.bind(this)
    this.onTagsChange = this.onTagsChange.bind(this)
    this.onContextChange = this.onContextChange.bind(this)
  }
  onTabClick(e) {
    $('#'+this.state.tab).removeClass('active');
    $(e.target).addClass('active');
    this.setState({ tab: e.target.innerHTML });
  }
  onQuoteClick(quote) {
    this.setState({currentQuote: quote})
  }
  onDeleteClick() {
    axios({
      method: 'DELETE',
      url: "/quotes",
      data: {quote: this.state.currentQuote}
    })
      .then((quotes) => {
      this.setState({quotes: quotes.data})
      this.onNewClick();
      })
  }
  onCreateClick() {
    axios({
      method: 'POST',
      url: '/quotes',
      data: {quote: this.state.currentQuote},

    })
      .then((quotes) => this.setState({quotes: quotes.data}))
    this.onNewClick();
  }
  onEditClick() {
    axios({
      method: 'PATCH',
      url: '/quotes',
      data: {quote: this.state.currentQuote}
    })
      .then((quotes) => {
        this.setState({quotes: quotes.data})
        this.onNewClick()
      })
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: '/quotes'
    })
     .then(quotes => this.setState({quotes: quotes.data}))
 }
 onAuthorChange(e) {
  var state = this.state.currentQuote
  state.author = e.target.value
  this.setState({currentQuote: state})
 }
 onQuoteChange(e) {
  var state = this.state.currentQuote
  state.quote = e.target.value
  this.setState({currentQuote: state})
 }
 onContextChange(e) {
   var state = this.state.currentQuote
   state.context = e.target.value
   this.setState({currentQuote: state})
 }
 onTagsChange(e) {
   var state = this.state.currentQuote
   state.tags = e.target.value.toLowerCase().split(',')
   this.setState({currentQuote: state})
 }
 onNewClick() {
 var currentQuote = {
    quote: '',
    author: '',
    tags: [],
    context: ''
  }
  this.setState({currentQuote: currentQuote})
 }

  render() {
    var filteredQuotes = this.state.quotes.filter(quote => {
      return quote.author.includes(this.state.currentQuote.author) && quote.quote.includes(this.state.currentQuote.quote) && quote.context.includes(this.state.currentQuote.context) && quote.tags.join(',').includes(this.state.currentQuote.tags.join(','));
      })
    return (
      <div>
        {/* <div className="navbar">
          <button id="Quotes" onClick={(e)=>this.onTabClick(e)}>Quotes</button><button id="Edit" className="active"onClick={(e)=> this.onTabClick(e)}>Edit</button>
        </div> */}
        <EditForm onTagsChange={this.onTagsChange} onContextChange={this.onContextChange}onQuoteChange={this.onQuoteChange}onAuthorChange={this.onAuthorChange}onCreateClick={this.onCreateClick} onEditClick={this.onEditClick} onDelete={this.onDeleteClick}state={this.state.currentQuote} onNewClick={this.onNewClick} />
       <QuotesList onClick={this.onQuoteClick} quotes={filteredQuotes} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))