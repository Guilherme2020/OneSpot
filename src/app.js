
const express = require('express')
const request = require('request')
const querystring = require('querystring')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { client_id, client_secret, redirect_uri } = require('./config.js')
const stateKey = 'spotify_auth_state'

function generateRandomString(length) {
	let text = ''
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}

const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.static('public'))

app.get('/login', (req, res) => {
	const state = generateRandomString(16)
	res.cookie(stateKey, state)

	res.redirect('https://accounts.spotify.com/authorize?' +
	querystring.stringify({
		response_type: 'code',
		client_id: client_id,
		scope: 'user-read-private user-read-email',
		redirect_uri: redirect_uri,
		state: state
	}))
})

app.get('/callback', (req, res) => {
	const code = req.query.code || null
	const state = req.query.state || null
	const storedState = req.cookies ? req.cookies[stateKey] : null

	if (state === null || state !== storedState) {
		res.redirect('/#'+querystring.stringify({
			error: 'state_mismatch'
		}))
	}
	else {
		res.clearCookie(stateKey)

		const authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			form: {
				code: code,
				redirect_uri: redirect_uri,
				grant_type: 'authorization_code'
			},
			headers: {
				'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
			},
			json: true
		}

		request.post(authOptions, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				res.redirect('/#'+querystring.stringify({
					'access_token': body.access_token
				}))
			} else {
				res.redirect('/#'+querystring.stringify({
					error: 'invalid_token'
				}))
			}
		})
	}
})

app.get('/refresh_token', function(req, res) {
	const refresh_token = req.query.refresh_token
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
		form: {
			grant_type: 'refresh_token',
			refresh_token: refresh_token
		},
		json: true
	}

	request.post(authOptions, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			res.redirect('/#'+querystring.stringify({
				'access_token': body.access_token
			}))
		}
	})
})

app.listen(8888, () => {
	console.log('Listening on 8888')
})
