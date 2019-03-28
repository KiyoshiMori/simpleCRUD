import express from 'express';
import graphqlExpress from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';

import index from '../lib/graphql/schema/index';

// const server = express();
// const router = express.Router();

export default (server) => {
	console.log({ schemaTest: index });

	server.use(
		'/graphql',
		graphqlExpress({
			schema: index,
		}),
	);
	server.use(
		'/playground',
		expressPlayground({
			endpointURL: '/graphql',
		}),
	);
};