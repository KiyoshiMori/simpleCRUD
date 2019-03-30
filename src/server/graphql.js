import express from 'express';
import graphqlExpress from 'express-graphql';
import { graphqlUploadExpress } from 'graphql-upload';
import expressPlayground from 'graphql-playground-middleware-express';

import index from '../lib/graphql/schema/index';

// const server = express();
// const router = express.Router();

export default (server) => {
	console.log({ schemaTest: index });

	server.use(
		'/graphql',
		graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
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