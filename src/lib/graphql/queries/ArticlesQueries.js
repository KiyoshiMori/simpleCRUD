import gql from 'graphql-tag';

export const getArticles = gql`
	{
		getArticles {
			id
			text
			author
			header
			created_at
			updated_at
			articlesimage {
      			file_path
			}
		}
	}
`;

export const postArticle = gql`
	mutation ($text: String, $header: String, $file: Upload) {
		createArticle(input: {text: $text, header: $header, file: $file}) {
			id
			author
			header
			text
			created_at
			updated_at
		}
	}
`;