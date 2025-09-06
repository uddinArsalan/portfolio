import axios from "axios";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

// const GET_USER_BLOGS = `{
//   user(username : "ArsalanU") {
//     publication {
//       posts {
//         brief
//         coverImage
//         dateAdded
//         slug
//         title
//       }
//     }
//   }
// }
// `;

const GET_USER_BLOGS = `{
  publication(host: "arsalanu.hashnode.dev") {
    posts(first: 10) {
      edges {
        node {
          title
          publishedAt
          brief
          url
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

const resolvers = {
  Query: {
    publication: async (_, { host }) => {
      try {
        const response = await axios.post(
          `https://gql.hashnode.com`,
          JSON.stringify({ query: GET_USER_BLOGS }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const userData = response.data.data;
        return {
            posts: {
              edges : userData.publication.posts.edges
          },
        };
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Unable to fetch user data");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*", 
    methods: "GET,POST",
    allowedHeaders: ["Content-Type"],
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server running at port 4000 " + url);
