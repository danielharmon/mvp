import React from 'react'

var Author = function(props) {
  var quotes = props.quotes.map(quote => {
    return (
      <li onClick={()=> props.onClick(quote)}>{quote.quote}</li>
    )
  })
  return (
    <div>
      <ul>
        {quotes}
      </ul>
    </div>
  )
}
export default Author;