import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';

import RootDefinition from './RootDefinition';
import RootResolver from './RootResolver';

import ArticlesDefinition from './Articles/ArticlesDefinition';
import ArticlesResolver from './Articles/ArticlesResolver';

import UserDefinition from './User/UserDefinition';
import UserResolver from './User/UserResolver';

const index = makeExecutableSchema({
	typeDefs: [RootDefinition, ArticlesDefinition, UserDefinition],
	resolvers: _.merge({}, RootResolver, ArticlesResolver, UserResolver),
});

export default index;
