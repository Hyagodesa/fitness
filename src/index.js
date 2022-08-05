const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-prser')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencode({ extended: false }))
app.use(express.json())
app.use(cors())


let database = [
    { '1': { nome: 'Cliente 1', idade: '20' } },
    { '2': { nome: 'Cliente 2', idade: '20' } },
    { '3': { nome: 'Cliente 3', idade: '20' } },
]

app.get('/', (req, resp) => {
    return resp.json(database)

})




app.listen(5888, () => {
    
}
)