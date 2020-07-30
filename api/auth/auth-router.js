const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');

const router = express.Router();

// Creates a new user in the database
router.post('/register', async (req, res, next) => {
	try {

		const newUser = req.body;

		Users.add(newUser);
		res.status(201).json(newUser);
	} catch(err) {
		next(err);
	}
})

// Creates a login session for a user
router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await Users.findBy({ username }).first();

		if (!user) {
			return res.status(401).json({
				message: 'You shall not pass!',
			});
		}

		const passwordValid = await bcrypt.compareSync(password, user.password);

		if (!passwordValid) {
			return res.status(401).json({
				message: 'You shall not pass!',
			});
		}

		const payload = {
			id: user.id,
			username: user.username,
			role_id: user.role_id,
		}

		res.cookie('token', jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'}));

		res.json({
			message: `Welcome ${payload.username}!`,
		});
	} catch(err) {
		next(err);
	}
})

module.exports = router;