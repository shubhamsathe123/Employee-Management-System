const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./Routes/routes');

let port=3000;

app.use(cors())
app.use(express.json())
app.use('/api', route)

// app.get('/', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })
 
app.listen(port, () => {
    console.log(`Server 🌎 is listening at port ${port}\n`)
    require('./Config/config')
})