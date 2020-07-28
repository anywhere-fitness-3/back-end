const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('./middleware/logger')

const usersRouter = require('./api/users/users-router.js');
const classesRouter = require('./api/classes/classes-router.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(cookieParser());
server.use(express.json());

server.use(logger('long'));
<<<<<<< Updated upstream
server.use('/users', usersRouter);
server.use('/classes', classesRouter);
=======
server.use('/api', welcomeRouter);
server.use('/api/users', usersRouter);
server.use('/api/classes', classesRouter);
>>>>>>> Stashed changes

server.get('/', (req, res) => {
	res.status(200).json({
		message: 'The API for Anywhere Fitness is running!'
	});
});

module.exports = server;