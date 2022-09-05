const express = require('express')
let cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected')
  })
  .catch((err) => {
    console.log('Error connecting to db' + err.stack)
  })

app.use(bodyParser.json())
app.use(cors());
app.get('/', (req, res) => {
  return res.send('connected!')
})
let auth = express.Router()
require('./src/routes/auth.js')(auth);
app.use('/auth', auth);
let api = express.Router();
require('./src/routes/secure.js')(api)
app.use('/api',api);
// app.set('port', process.env.PORT || 8000)

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server connected at Port ${port}`);
});