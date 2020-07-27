const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const welcomeRouter = require('./api/welcome/welcome-router.js');
const usersRouter = require('./api/users/users-router.js');
const classesRouter = require('./api/classes/classes-router.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(cookieParser());
server.use(express.json());

server.use('/api', welcomeRouter);
server.use('/users', usersRouter);
server.use('/classes', classesRouter);

server.get('/', (req, res) => {
	res.status(200).json({
		message: 'The API is running!'
	});
});

module.exports = server;