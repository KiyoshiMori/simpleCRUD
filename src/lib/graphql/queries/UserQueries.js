import gql from 'graphql-tag';

export const getInfo = gql`
	{
		getInfo {
			username
			authorized
		}
	}
`;

export const login = gql`
	query ($login: String, $password: String) {
		login(input: {login: $login, password: $password}) {
			token
		}
	}
`;

export const signup = gql`
	mutation ($login: String, $password: String) {
		signup(input: {login: $login, password: $password}) {
			token
		}
	}
`;

export const logout = gql`
	{
		logout
	}
`;
