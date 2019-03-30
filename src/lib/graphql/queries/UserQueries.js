import gql from 'graphql-tag';

export const getInfo = gql`
	{
		getInfo {
			username
			authorized
		}
	}
`;
