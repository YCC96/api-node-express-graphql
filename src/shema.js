import { makeExecutableSchema } from 'graphql-tools';
import { Resolvers } from './resolvers';

const typeDefs = `
    type Query {
        hello: String
        greet(name: String): String
        tasks: [Task]
    }

    type Mutation {
        createTask(data: NewTask): Task
    }

    type Task {
        id: ID
        title: String!
        description: String!
        number: Int!
        flag: Boolean
    }

    input NewTask {
        title: String!
        description: String!
        number: Int!
        flag: Boolean
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: Resolvers
});