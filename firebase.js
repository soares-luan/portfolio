var admin = require("firebase-admin");

var serviceAccount = require("./credenciais/portfolio-b378f-firebase-adminsdk-zuvlf-5888cd3e81.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://portfolio-b378f.firebaseio.com"
});

module.exports = admin;