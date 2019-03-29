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

export const postArticle = gql`
	mutation ($token: String, $text: String, $header: String) {
		createArticle(input: {token: $token, text: $text, header: $header}) {
			id
			author
			header
			text
			created_at
			updated_at
		}
	}
`;