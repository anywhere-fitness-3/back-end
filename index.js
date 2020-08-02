require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT || 8000;

server.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});