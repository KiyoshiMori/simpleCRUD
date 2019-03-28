import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';

import RootDefinition from './RootDefinition';
import RootResolver from './RootResolver';

const schema = makeExecutableSchema({
	typeDefs: [RootDefinition],
	resolvers: _.merge({}, RootResolver),
});

export default schema;
