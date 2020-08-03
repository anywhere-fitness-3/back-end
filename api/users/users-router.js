const express = require('express');
const Users = require('./users-model');
const router = express.Router();
const restrict = require('../../middleware/restrict');

// Retrieve all users (restricted to instructors)
router.get('/', restrict(1), async (req, res, next) => {
	try {
		const users  = await Users.findAll();
		res.json(users);
	} catch (err) {
		next(err);
	}
})

// Retrieves a user with the specified id
router.get('/:id', restrict(2), async (req, res, next) => {
	try {
		const user  = await Users.findById(req.params.id);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

// Retrieves users with the specified role (restricted to instructors)
router.get('/roles/:role_id', restrict(1), async (req, res, next) => {
	try {
		const users  = await Users.findByRole(req.params.role_id);
		res.json(users);
	} catch (err) {
		next(err);
	}
})

// Updates a current user with the specified id
router.put('/:id', restrict(2), async (req, res, next) => {
	try {
		const user = await Users.update(req.params.id, req.body);
		res.json(user);
	} catch (err) {
		next(err);
	}
});


// Deletes an user and returns the updated list of users
router.delete('/:id', restrict(2), async (req, res, next) => {
	try {
		await Users.remove(req.params.id);
		const users  = await Users.findAll();
		res.json(users);
	} catch (err) {
		next(err)
	}
})

module.exports = router;