const app = require('./app')
//const http = require('http')
const config = require('./utils/config')
const https = require('https'), fs = require('fs')

const options = {
	//key: fs.readFileSync(config.KEY),
	//cert: fs.readFileSync(config.CERT)
	key: fs.readFileSync('/etc/letsencrypt/live/pappdi.in/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/pappdi.in/fullchain.pem')
}

const server = https.createServer(options, app)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
