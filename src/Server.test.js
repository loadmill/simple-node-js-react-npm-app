import React from 'react';
const env = require('node-env-file');

const loadmill = require('loadmill')({token: process.env.LOADMILL_API_TOKEN});

it('Load home page', () => {
    loadmill.run({requests: [{url: "www.loadmill.com"}]})
        .then(loadmill.wait)
        .then(result => console.log(result));
});

it('Functional tests home page', () => {
    loadmill.runFunctional({requests: [{url: "www.loadmill.com"}]})
        .then(result => console.log(result));
});
