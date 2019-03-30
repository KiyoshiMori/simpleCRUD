export default `
	type Info {
		authorized: Boolean
		username: String
		role: String
	}
	
	input signupInput {
		login: String
		password: String
	}
	
	type signupResponse {
		token: String
	}

	extend type Query {
		getInfo: Info
	}
	
	extend type Mutation {
		signup(input: signupInput): signupResponse
	}
`;
