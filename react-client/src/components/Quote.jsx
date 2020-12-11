import React from 'react'

var Quote = (props) => {
  return (
    <div onClick={() => props.onClick({...props.quote})}>
      <div className="author">{props.quote.author}</div>
      <div>{props.quote.quote}</div>
      <div>{props.quote.context}</div>
      <div>{props.quote.tags}</div>
    </div>
  )
}
export default Quote