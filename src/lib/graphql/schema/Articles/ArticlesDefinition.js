export default `
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
		header: String
		text: String
		file: Upload
	}
	
	input removeArticleInput {
		id: Int 
	}

	extend type Query {
		getArticles: [articleResponse]
	}
	
	extend type Mutation {
		createArticle(input: createArticleInput): articleResponse
		removeArticle(input: removeArticleInput): articleResponse
	}
`;
