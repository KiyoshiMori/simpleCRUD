import 'isomorphic-fetch';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import db from '../lib/db';
import jwtStrategy from '../lib/helpers/jwtStrategy';

import graphql from './graphql';

const server = express();

const serverPort = process.env.PORT || 8080;
const isDev = process.env.NODE_ENV === 'development';
let isBuilt = false;

server.use(cors({
	origin: 'localhost:8080',
	credentials: true,
}));
server.use(cookieParser());
server.use(passport.initialize());
passport.use('jwt', jwtStrategy);

db.authenticate().then(() => console.log('success'))
	.catch(err => console.log('ERROR' + err));

server.use('/static', express.static('static'));

const done = () => {
	if (isBuilt) return;

	server.listen(serverPort, () => {
		isBuilt = true;
		console.log(`Server started at ${serverPort}`);
	});
};

server.use(graphql());

if (isDev) {
	require('./webpackCompile').webpackHotLoader(server);
	done();
} else {
	require('./webpackCompile').webpackSSR(server, done);
}