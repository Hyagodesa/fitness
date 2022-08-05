const express = require('express')
const app = express()
app.use(express.json())


const cadastro = []



app.get('/user/register', function (req, resp) {
    const { name, email, senha } = req.body
    cadastro.push({ name, email, senha })
    return resp.json({ name, email, senha })
})
app.post('/', function (req, resp) {
    const { name } = req.body.name
    cadastro.push({ name })
})



app.get('/user/login', function (req, resp) {
    const user = cadastro.find(function (u) {
        return u.email === req.params.email
    })
    return resp.json(user)
})












app.listen(4800)