const request = require('supertest');
const server = require('../server');

describe('Post to api/auth/login ', () => {
	it('Login user POST to api/auth/login', async () => {
		const res = await request(server).post('/api/auth/login').send({
			username: "user-01",
			password: "password-01",
		})
		expect(res.statusCode).toBe(200)
		// `content-type` headers tell the client how to render the data
		expect(res.headers['content-type']).toBe('application/json; charset=utf-8')
		expect(res.body.message).toBe('Welcome user-01!')
	})
})

describe('GET to api/auth/logout ', () => {
	it('Login user GET to api/auth/logout', async () => {
		const res = await request(server).get('/api/auth/logout');
		expect(res.statusCode).toBe(200)
		// `content-type` headers tell the client how to render the data
		expect(res.headers['content-type']).toBe('text/html; charset=utf-8')
	})
})
