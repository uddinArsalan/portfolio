import About from "./About";
import Background from "./HeroSection";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import ProjectSection from "./ProjectSection";
import Skills from "./Skills";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//https://apollo-server-12hj.onrender.com

const client = new ApolloClient({
  uri: "https://apollo-server-12hj.onrender.com",
  cache: new InMemoryCache(),
});

const Main = () => {
  return (
    <div className="flex flex-col lg:col-span-3 col-span-4 lg:static absolute top-0 -z-10 lg:z-20 ">
      <Background />
      <About />
      <ProjectSection
      />
      <ApolloProvider client={client}>
        <Blogs />
      </ApolloProvider>
      <Skills />
      <Contacts />
      {/* <img src="https://skillicons.dev/icons?i=postgresql&theme=light" alt="" /> */}
    </div>
  );
};

export default Main;
