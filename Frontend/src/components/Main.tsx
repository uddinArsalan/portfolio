import About from "./About";
import Background from "./HeroSection";
// import Blogs from "./Blogs";
import Contacts from "./Contacts";
import ProjectSection from "./ProjectSection";
import Skills from "./Skills";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const client = new ApolloClient({
//   uri: import.meta.env.VITE_API_URL,
//   cache: new InMemoryCache(),
// });

const Main = () => {
  return (
    <div className="flex flex-col lg:col-span-3 col-span-4 lg:static absolute top-0 -z-10 lg:z-20 ">
      <Background />
      <About />
      <ProjectSection />
      {/* <ApolloProvider client={client}> */}
        {/* <Blogs /> */}
      {/* </ApolloProvider> */}
      <Skills />
      <Contacts />
    </div>
  );
};

export default Main;
