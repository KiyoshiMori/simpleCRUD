import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';

import RootDefinition from './RootDefinition';
import RootResolver from './RootResolver';

import ArticlesDefinition from './Articles/ArticlesDefinition';
import ArticlesResolver from './Articles/ArticlesResolver';

const index = makeExecutableSchema({
	typeDefs: [RootDefinition, ArticlesDefinition],
	resolvers: _.merge({}, RootResolver, ArticlesResolver),
});

export default index;
