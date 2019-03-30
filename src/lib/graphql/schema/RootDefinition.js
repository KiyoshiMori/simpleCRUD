export default (`
	scalar Upload
	
    type Query {
        _: Boolean
    }
    
    type Mutation {
        _: Boolean
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`);
