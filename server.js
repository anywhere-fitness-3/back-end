require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const server = express();

const welcomeRouter = require('./api/welcome/welcome-router.js');
const authRouter = require('./api/auth/auth-router');
const usersRouter = require('./api/users/users-router.js');
const classesRouter = require('./api/classes/classes-router.js');



server.use(cors());

server.options('*', cors());

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

server.use(helmet());
server.use(cookieParser());
server.use(express.json());

server.use('/api', welcomeRouter);
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/classes', classesRouter);

server.get('/', (req, res) => {
	res.status(200).json({
		message: 'The API is running!'
	});
});

module.exports = server;