const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../database/dbConfig');
const Users = require('../users/users-model');

const router = express.Router();

router.post('/', (req, res, next) => {
	// do your magic!
	db.insert(req.body)
		  .then((user) => {
			  return res.status(201).json(user)
		  })
		  .catch(next)
  });
  

// Creates a login session for a user
router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await Users.findBy({ username }).first();

		if (!user) {
			return res.json({
				message: 'You shall not pass!',
			});
		}

		const passwordValid = await bcrypt.compareSync(password, user.password);

		if (!passwordValid) {
			return res.json({
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
			message: `Welcome ${user.username}!`,
		});
	} catch(err) {
		next(err);
	}
})

module.exports = router;