export const typeDefs = `#graphql
    type Post {
        title : String!
        brief : String!
        slug : String!
        dateAdded : String!
        coverImage : String
    }

    type Publication {
        posts : [Post]
    }

    type User {
        publication : Publication
    }

    type Query {
        user(username: String): User
    }
`;
