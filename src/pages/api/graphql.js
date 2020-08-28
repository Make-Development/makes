import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';
import httpHeadersPlugin from 'apollo-server-plugin-http-headers';
import User from '../../../models/User';
import NextAuth from 'next-auth'
import jwt from 'jsonwebtoken';

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
`;


const resolvers = {
    Query: {
        users: () => User.find({}),
    },
};


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const REFRESH_TOKEN_COOKIE_OPTIONS = {
    // Get part after // and before : (in case port number in URL)
    // E.g. <http://localhost:3000> becomes localhost
  
    httpOnly: true,
    path: '/',
    sameSite: true,
    // Allow non-secure cookies only in development environment without HTTPS
    secure: !!process.env.BASE_URL.includes('https'),
  };
  console.log(REFRESH_TOKEN_COOKIE_OPTIONS);

let db

const apolloServer = new ApolloServer({
    schema,
    plugins: [httpHeadersPlugin],
    context: async ({ req }) => {
        // Header is in form 'Bearer <token>', grabbing the part after ' '
        const token = req.headers.authorization?.split(' ')[1] || undefined;
     
        // Initialise as empty arrays - resolvers will add items if required
        const setCookies = [];
        const setHeaders = [];
       
        try {
          const { user } = jwt.verify(token, process.env.JWT_SECRET);
          
          return { req, setCookies, setHeaders, user };
        } catch (error) {
          return { setCookies, setHeaders, req };
        }
      },
})



export const config = {
    api: {
        bodyParser: false,
    },
}

const apollo = apolloServer.createHandler({ path: '/api/graphql' });

export default apollo