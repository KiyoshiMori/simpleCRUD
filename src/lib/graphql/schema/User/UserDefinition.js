export default `
	type Info {
		authorized: Boolean
		username: String
		role: String
	}
	
	input signInput {
		login: String
		password: String
	}
	
	type signResponse {
		token: String
	}

	extend type Query {
		getInfo: Info
		login(input: signInput): signResponse
	}
	
	extend type Mutation {
		signup(input: signInput): signResponse
	}
`;
