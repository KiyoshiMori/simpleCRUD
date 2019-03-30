export default `
	type Info {
		authorized: Boolean
		username: String
		role: String
	}

	extend type Query {
		getInfo: Info
	}
`;
