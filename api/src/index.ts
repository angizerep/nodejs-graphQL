import { ApolloServer } from 'apollo-server'

// 1 - query
    const typeDefs = `
        type Query {
            info: String!
        }
    `

// 2 - resolvers
    const resolvers = {
        Query: {
            info: () => 'This is the API'
        }
    }

// 3 - init service
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

server.listen().then(({ url }) => console.log( `Server is running on ${url}`))

console.log('Yeah! this is working xD')