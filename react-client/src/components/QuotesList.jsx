import React from 'react'
import Quote from './Quote.jsx'

var QuotesList = (props) => {
  var quotes = props.quotes.map(quote => {
    return (
      <Quote quote={quote}/>
    )
  }
 return (
   <div class="quotesList">
     {quotes}
   </div>
 )
}

export default QuotesList