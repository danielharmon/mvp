var mongoose = require('mongoose')

mongoose.connect(process.env.DBKEY).then(() => console.log('connected to mongoDB'))


var QuoteSchema = mongoose.Schema({
  quote: String,
  author: String,
  tags: [{type: String}],
  context: String
})

var Quote = new mongoose.model('Quote', QuoteSchema)

var addQuote = function(quote) {
  var newQuote = new Quote({
    quote: quote.quote ? quote.quote : '',
    author: quote.author ? quote.author : '',
    tags: quote.tags ? quote.tags : '',
    context:quote.context ? quote.context : ''
  })

  return new Promise((resolve, reject) => {
    newQuote.save((err, newQuote) => {
    if(err) {reject(err)}
    else resolve(getAllQuotes())
    })
  })
}
var getAllQuotes = () => {
  return Quote.find({})
}
var deleteQuote = (quote) => {
  return new Promise((resolve, reject) => {
    Quote.findByIdAndDelete({_id: quote._id}, (err, doc) => {
      if(err) {reject(err)}
      else resolve()
    })
  })
}
var updateQuote = (quote) => {
  return new Promise((resolve, reject) => {
    Quote.findOneAndUpdate({_id: quote._id}, quote, (err) => {
      if(err) {reject(err)}
      else resolve();
    })
  })
}

module.exports.addQuote = addQuote;
module.exports.getAllQuotes = getAllQuotes;
module.exports.deleteQuote = deleteQuote;
module.exports.updateQuote = updateQuote;