const express = require('express');
const app = express();
const port = 5000;

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets/img', express.static(__dirname + '/assets/img'));

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});




app.listen(port, () => console.log(`listening on port ${port}!`));
