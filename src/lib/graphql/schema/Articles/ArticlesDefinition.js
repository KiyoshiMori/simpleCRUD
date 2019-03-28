export default `
	input getArticlesInput {
		token: String
	}
	
	type articleResponse {
		author: String
		created_at: String
		updated_at: String
		header: String
		text: String
		id: Int
	}
	
	input createArticleInput {
		token: String
		header: String
		text: String
	}

	extend type Query {
		getArticles(input: getArticlesInput): [articleResponse]
	}
	
	extend type Mutation {
		createArticle(input: createArticleInput): articleResponse
	}
`;
