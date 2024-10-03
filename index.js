const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    
});

app.get('/public/styles.css', (request, response, callback) => {
    const fileOptions = {
        root: __dirname,
        dotfiles: 'deny',
    };
    response.sendFile("/public/styles.css", fileOptions);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
