const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
// app.listen(3000, () => {
//     console.log('Express web-server started on port 3000 ...');
// });

app.get('/', (req, res) => {
    const msg = { nombre: 'gwfernandez', edad: 41, url: req.url };
    res.send(msg);
});

