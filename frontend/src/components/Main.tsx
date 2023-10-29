import About from "./About";
import Background from "./Background";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import ProjectSection from "./ProjectSection";
import Skills from "./Skills";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://apollo-server-12hj.onrender.com',
  cache: new InMemoryCache(),
});

const Main = () => {
  return (
    <div className="flex flex-col md:col-span-3">
      <Background />
      <About />
      <ProjectSection />
      <ApolloProvider client={client}>
        <Blogs />
      </ApolloProvider>
      <Skills />
      <Contacts />
    </div>
  )
}

export default Main