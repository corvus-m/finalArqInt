import { ApolloServer, ApolloError, gql } from "apollo-server"//import del squema
export const typeDefs = gql`
type Character {
  id: ID
  name: String
  status: String
  species: String
  type: String
  gender: String
  origin: Location
  location: Location
  image: String
  episode: [Episode]!
  created: String
}

type Characters {
  info: Info
  results: [Character]
}

type Episode {
  id: ID
  name: String
  air_date: String
  episode: String
  characters: [Character]!
  created: String
}

type Location {
  id: ID
  name: String
  type: String
  dimension: String
  residents: [Character]!
  created: String
}


type Info {
  count: Int
  pages: Int
  next: Int
  prev: Int
}

input FilterCharacter {
  name: String
  status: String
  species: String
  type: String
  gender: String
}


 type Query {
  character(id: ID!): Character
  characters(page: Int, filter: FilterCharacter): Characters
  

 }
`

//anterior schema

// type User{
//   id: ID!
//   email: String!
//   pwd: String!
//   token: String
//   recipes: [Recipe!]!
// }

// type Ingredient{
//   id: ID!
//   name: String!
//   recipes: [Recipe!]!
//   author: User!
// }


// type Recipe{
//   id: ID!
//   name: String!
//   description: String!
//   ingredients: [Ingredient!]!
//   author: User!
// }



// type Query {
//   getRecipes: [Recipe] 
//   getRecipe(id_str: String): Recipe!
//   getUser(id_str: String!): User
//   getUsers: [User]
// }

// type Mutation {
//     addIngredient(name:String): String 
//     addRecipie(name:String!, description:String!, ingredientes:[String]!): String
//     SignIn: String!
//     LogIn: String!
//     LogOut:String!
//     SignOut:String!
//     deleteIngredient(ingredient:String!):String!
//     deleteRecipe(name:String!):String!
//     updateRecipe(name:String!, description:String, ingredientes:[String]):String!
// }
//updateRecipe(id: ID!, recipe): RecipeInput!