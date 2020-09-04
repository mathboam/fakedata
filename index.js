const {ApolloServer,gql} = require('apollo-server');

const port = 5000;
const url = "http://localhost:5000";

const typeDefs = gql`
type Product {
    id:ID
    name:String
    price:Int
}

type Query {
    product(id:ID):Product
    products:[Product]
}
`;

const resolvers = {
    Query:{
        product(_,{id}){

        }
    }
}


