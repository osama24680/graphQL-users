const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema/type-defs")
const { resolvers } = require("./schema/resolvers")

const server = new ApolloServer({ typeDefs, resolvers ,context:()=>{
    return{name:"OsamaA"}
}})


server.listen().then(({ url }) => {
    console.log(`OSAMA...,YOUR API IS RUNNING at => ${url}`)
})


