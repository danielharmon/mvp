import React from 'react'
import Quote from './Quote.jsx'

var QuotesList = (props) => {
  var quotes = props.quotes.map(quote => <div key={quote._id}><Quote onClick={props.onClick}quote={quote}/></div>)


 return (
   <div className="quotesList">
     <h1>Your Quotes</h1>
     {quotes}
   </div>
 )
}

export default QuotesList