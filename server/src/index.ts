require('dotenv').config()
import 'reflect-metadata'
import express from 'express' 
import { DataSource } from 'typeorm'
import { User } from './entities/User'
import { Post } from './entities/Post'
import { ApolloServer } from 'apollo-server-express/dist/ApolloServer'
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { Context } from './types/Context'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from './resolvers/hello'
import { UserResolver } from './resolvers/user'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import mongoose from 'mongoose'
import { COOKIE_NAME } from './constants'
import { PostResolver } from './resolvers/post'
import cors from 'cors'

export const myDataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    database: 'dApp',
    entities: [User, Post],
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    logging: true,
    synchronize: true
})

const main = async () => {
    myDataSource
        .initialize()
        .then(() => {
            console.log("Data source initialized")
        })
        .catch((err) => {
            console.error("error", err)
        })

    const app = express()
    app.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true
    }))


    // Session/Cookie store
    const mongoUrl = `mongodb+srv://${process.env.SESSION_DB_USERNAME_DEV_PROD}:${process.env.SESSION_DB_PASSWORD_DEV_PROD}@dapp.fnbemcb.mongodb.net/?retryWrites=true&w=majority`
    await mongoose.connect(mongoUrl)

    console.log('MongoDB connected')

    // Session
    app.use(session({
        name: COOKIE_NAME,
        store: MongoStore.create({ mongoUrl }),
        cookie: {
            maxAge: 1000 * 60 * 60, //1 hour
            httpOnly: true,  // JS front end cannot access the cookie
            secure: true,//cookie only works in https
            sameSite: 'lax', //protect against CSRF attack
        },
        secret: process.env.SESSION_SECRET_DEV_PROD as string,
        saveUninitialized: false, // don't save empty sessions, right from the start
        resave: false
    }))

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, UserResolver, PostResolver],
            validate: false
        }),
        context: ({ req, res }): Context => ({ req, res }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app, cors: false })

    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => console.log(`Server started on port ${PORT}. GraphQL started on localhost: ${PORT}${apolloServer.graphqlPath}`))
}

main().catch(error => console.log(error))