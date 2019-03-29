import gql from 'graphql-tag';

export const getArticles = gql`
	query ($token: String) {
		getArticles(input: { token: $token }) {
			id
			text
			author
			header
			created_at
			updated_at
		}
	}
`;
