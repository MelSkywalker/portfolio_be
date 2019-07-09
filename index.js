if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const api_key = process.env.API_KEY;
const DOMAIN = process.env.MY_DOMAIN;
const mail = process.env.MY_MAIL;
const mailgun = require('mailgun-js');
const mg = mailgun({apiKey: api_key, domain: DOMAIN});

app.post('/sendEmail', function(req, res) {
  console.log(req.body.name);
  res.send('POST');
})

const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'mel.test9@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};

const sendEmail = mg.messages().send(data, function (error, body) {
  if(!error) console.log(body);
  else console.error('Error: ', error);
});
