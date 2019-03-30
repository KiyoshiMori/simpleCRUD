import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const port = process.env.PORT || 8080;
const domain = process.env.DOMEN || 'localhost';

const client = new ApolloClient({
	link: createUploadLink({
		uri: `http://${domain}:${port}/graphql`,
		credentials: 'include',
	}),
	cache: new InMemoryCache(),
	connectToDevTools: true,
	ssrMode: true,
});

export default client;
