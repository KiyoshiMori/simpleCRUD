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
		graphqlExpress(req => ({
			schema,
			context: {
				user: req.user,
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