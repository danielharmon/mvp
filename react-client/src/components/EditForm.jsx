import React from 'react'

var EditForm = (props) => {


    return (
      <div>
        <h1></h1>
        <form>
          <label>Who said it?</label><br></br>
          <input type="text" id="author" placeholder="Name..."value={props.state.author ? props.state.author : ''} onChange={(e) => props.onAuthorChange(e)}></input><br></br>
          <label>What'd they say?</label><br></br>
          <input type="text" id="quote" placeholder="Quote..." value={props.state.quote ? props.state.quote : ''}onChange={(e) => props.onQuoteChange(e)}></input><br></br>
          <label>Explain the circumstances</label><br></br>
          <input type="text" id="context" placeholder="Context..." value={props.state.context ? props.state.context : ''}onChange={(e)=> props.onContextChange(e)}></input><br></br>
          <label>Attach comma serarated tags</label><br></br>
          <input type="text" id="tags" placeholder="funny, inspirational, children" value={props.state.tags ? props.state.tags.join(',') : ''}onChange={(e)=> props.onTagsChange(e)}></input><br></br>
          <br></br>
          <input type="submit" id="submit" onClick={(e) => {
            e.preventDefault();
            e.target.value === 'Edit' ? props.onEditClick() : props.onCreateClick()}} value={props.state._id ? 'Edit' : 'Create'}></input>
          <input type="submit" onClick={(e) => {
            if (props.state._id) {
              e.preventDefault();
              props.onDelete()
            }
          }}value="Delete"></input>
          <input type="submit" value="Clear" onClick={(e)=> {
            e.preventDefault()
            props.onNewClick()}}></input>
        </form>
      </div>)

}

export default EditForm