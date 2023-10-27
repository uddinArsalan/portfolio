// import dotenv from 'dotenv';
// dotenv.config();
// const Secret_KEY = process.env.DEV_KEY
// const config = {
//     headers: {
//       // Add your authentication header here, such as an API key, token, etc.
//       Authorization: `${Secret_KEY}`,
//     },
//   };
//https://api.hashnode.com/v1/me/articles
import axios from "axios";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

const GET_USER_BLOGS = `{
  user(username : "ArsalanU") {
    publication {
      posts {
        brief
        coverImage
        dateAdded
        slug
        title
      }
    }
  }
}
`;

const resolvers = {
  Query: {
    user: async (_, { username }) => {
      // Make an HTTP GET request to an external API
      try {
        const response = await axios.post(
          `https://api.hashnode.com/`,
          JSON.stringify({ query: GET_USER_BLOGS }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Server")
        // Access and return only the "posts" array from the response data
        const userData = response.data;
        console.log(userData.data.user.publication);
        // console.log(userData.data.user.publication);
        // console.log(JSON.stringify(userData))
        return {
            publication: {
              posts : userData.data.user.publication.posts
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
    origin: "*", // Replace "*" with the specific origins you want to allow
    methods: "GET,POST",
    allowedHeaders: ["Content-Type"],
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server running at port 4000 " + url);
