import React from 'react'

var Quote = (props) => {
  return (
    <div className="Quotes" onClick={() => props.onClick({...props.quote})}>
      <div className="author">{props.quote.author}</div>
      <div className="quote">{props.quote.quote}</div>
      <div className="tags">{props.quote.tags.join(',')}</div>
      <div className="context">{props.quote.context}</div>
    </div>
  )
}
export default Quote