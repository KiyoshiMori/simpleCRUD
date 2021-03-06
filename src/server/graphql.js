import express from 'express';
import graphqlExpress from 'express-graphql';
import { graphqlUploadExpress } from 'graphql-upload';
import expressPlayground from 'graphql-playground-middleware-express';
import passport from 'passport';

import schema from '../lib/graphql/schema';

const server = express();

export default () => {
	server.use(
		'/graphql',
		(req, res, next) => {
			passport.authenticate('jwt', { session: false }, (err, user, info) => {
				console.log({ userGraphql: user, cookies: req.cookies });

				if (user) {
					req.user = user;
				}

				next();
			})(req, res, next);
		},
		graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
		graphqlExpress((req, res) => ({
			schema,
			context: {
				res,
				user: req.user,
				setCookie: (name, value) => res.cookie(name, value),
				logout: req.logout,
			},
		})),
	);
	server.use(
		'/playground',
		expressPlayground({
			endpointURL: '/graphql',
		}),
	);

	return server;
};