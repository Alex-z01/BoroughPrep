// Modules
const express = require('express');
const expressHandlebars = require('express-handlebars')

const staff = require('./lib/test')

const app = express();

const port = process.env.PORT || 3000

// Configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get("/", (req, res) => res.render('home'))

app.get("/staff", (req, res) => res.render('staff', { variable: staff.getStaff() }))

app.use(express.static(__dirname + '/client/public'))

// 404 Page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))