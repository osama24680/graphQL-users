const { gql } = require("apollo-server")


const typeDefs = gql`
type User{
    id:ID!
    name:String!
    username:String!
    age:Int!
    nationality:Nationality!
    friends:[User]
    favouritMovies:[Movie]
}
type Movie{
    id:ID!
    name:String!
    yearOfPublication:Int!
    isInTheaters:Boolean!
}
    type Query{
        users:[User!]!
        user(id:ID!):User!
        movies:[Movie!]!
        movie(name:String!):Movie!
    }
    input CreateUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:Nationality 

    }
    input UpdateUserName{
        id:ID!
        newUserName:String!
    }
    type Mutation{
        # createUser(name:String!,age:Int!,nationality:String!,username:String!,id:ID!):User!
        createUser(input:CreateUserInput!):User
        updateUserName(input:UpdateUserName!):User
        deleteUser(id:ID!):User
    }
# for validation that only those nationalities could be used
enum Nationality{
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
}
`


module.exports = { typeDefs }

