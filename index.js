if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const app = express();

var api_key = process.env.API_KEY;
var domain = process.env.MY_DOMAIN;
var mail = process.env.MY_MAIL;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.post('/sendEmail', function(req, res) {
    res.send('POST request');

    var data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'mel.test9@gmail.',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomeness!'
      };

      mailgun.messages().send(data, function (err, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(err);
        }
      });
});