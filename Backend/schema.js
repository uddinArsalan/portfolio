export const typeDefs = `#graphql

    type PostCoverImage {
        url : String! 
    }

    type Node {
        title : String!
        publishedAt : String!
        brief : String!
        url : String!
        coverImage : PostCoverImage
    }

    type Edge {
        node : Node
    }

    type Post {
        edges : [Edge]
    }

   type Publication {
    posts(first: Int): Post 
    }

type Query {
    publication(host: String!): Publication
}
`;
