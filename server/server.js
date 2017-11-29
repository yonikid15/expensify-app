const path = require('path');
const express = require('express');

// this creates the express app
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// this tells express to use the public directory to serve up all our static assets
app.use(express.static(publicPath));

// this makes sure that if a file that is requested isn't in the public folder, to just give back index.html
app.get('*', (req, res) => {
    res.sendfile(path.join(publicPath, 'index.html'));
});

// this starts up the server on port 3000
app.listen(port, () => {
    console.log('Server is up!');
});