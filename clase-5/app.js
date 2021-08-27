const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
    res.send('Home page')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World')
});

app.get('/*', (req, res) => {
    res.send('404 || Page Not Found')
})

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`)
  })