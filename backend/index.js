const app = require('./app')
const config = require('./utils/config')
if (config.NODE_ENV === 'production') {
	const https = require('https')
	const fs = require('fs')
	const options = {
		//key: fs.readFileSync(config.KEY),
		//cert: fs.readFileSync(config.CERT)
		key: fs.readFileSync('/etc/letsencrypt/live/pappdi.in/privkey.pem'),
		cert: fs.readFileSync('/etc/letsencrypt/live/pappdi.in/fullchain.pem')
	}
	const server = https.createServer(options, app)
} else {
	const http = require('http')
	const server = http.createServer(app)
}
console.log(`NODE_ENV = ${config.NODE_ENV}`)
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
