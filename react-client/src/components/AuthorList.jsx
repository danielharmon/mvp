import React from 'react'


var AuthorList = function(props) {
  var authors = props.authors.map(author => <Author quotes={props.author.quotes}/>)
  return (
    <div>
      {authors}
    </div>

  )
}

export default AuthorList