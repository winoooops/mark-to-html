const express = require('express')
const marked = require('marked')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 3000;

// bodyParse middleware that implements json type data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 
app.use(express.static('public'))

// using handlebars as template
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Week One'
  })
})

app.listen(PORT, () => {
  console.log("The serve is now online...")
})

