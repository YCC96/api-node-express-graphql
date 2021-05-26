import { task } from './sample';

export const Resolvers = {
    Query: {
        hello: () => {
            return 'holisssss'
        },
        greet: (root, args) => {
            return args.name
        },
        tasks: () => {
            return task
        }
    },
    Mutation: {
        createTask: (_, { data }) => {
            data.id = task.length;
            task.push(data)
            return data
        }
    }
}