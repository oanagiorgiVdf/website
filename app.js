const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "public")));

app.get('/blog', (request, response) => {
    response.render('blog');
});

app.get('/article', (request, response) => {
    response.render('article');
});

app.get('*', function(req, res){
    res.status(404).redirect('/404.html');
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});