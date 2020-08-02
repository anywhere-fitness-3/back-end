const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

const roles = [
	2, // client role_id
	1 // instructor role_id
]

function restrict(role) {
	return async (req, res, next) => {
		const authError = {
			message: 'You shall not pass!',
		}

		try {
			const token = req.cookies.token;
			if (!token) {
				return res.status(401).json(authError);
			}

			jwt.verify(token, secret.jwtSecret, (err, decoded) => {
				if (err) {
					return res.status(401).json(authError);
				}

				if (role && roles.indexOf(decoded.role_id) < roles.indexOf(role)) {
					return res.status(401).json(authError);
				}

				next();
			})
		} catch(err) {
			next(err);
		}
	}
}

module.exports = restrict;