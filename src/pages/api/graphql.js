import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';




const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
  }

  type Query {
    users: [User]!
  }
`


const resolvers = {
    Query: {
        users(_parent, _args, _context, _info) {
            return _context.db
                .collection('users')
                .findOne()
                .then((data) => {
                    return data.users
                })
        },
    },
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})



let db

const apolloServer = new ApolloServer({
    schema,
    context: async () => {
        if (!db) {
            try {

                db = await mongoose.connect(process.env.MONGO_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });


            } catch (e) {
                console.log('--->error while connecting with graphql context (db)', e)
            }
        }

        return { db }
    },
})




export const config = {
    api: {
        bodyParser: false,
    },
}

const apollo = apolloServer.createHandler({ path: '/api/graphql' });

export default apollo