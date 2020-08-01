require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const welcomeRouter = require('./api/welcome/welcome-router.js');
const authRouter = require('./api/auth/auth-router');
const usersRouter = require('./api/users/users-router.js');
const classesRouter = require('./api/classes/classes-router.js');

const server = express();

const origin =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://front-end-3l69ehntk.vercel.app';

server.use(cors({ credentials: true, origin }));
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
