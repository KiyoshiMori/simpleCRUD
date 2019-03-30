export default `
	input getArticlesInput {
		token: String
	}
	
	type Image {
		file_path: String
	}
	
	type articleResponse {
		author: String
		created_at: String
		updated_at: String
		header: String
		text: String
		id: Int
		articlesimage: Image
	}
	
	input createArticleInput {
		token: String
		header: String
		text: String
		file: Upload
	}

	extend type Query {
		getArticles(input: getArticlesInput): [articleResponse]
	}
	
	extend type Mutation {
		createArticle(input: createArticleInput): articleResponse
	}
`;
