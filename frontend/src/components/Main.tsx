import About from "./About";
import Background from "./Background";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import ProjectSection from "./ProjectSection";
import Skills from "./Skills";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface NavbarProp {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const Main = ({ showNav, setShowNav }: NavbarProp) => {
  return (
    <div className="flex flex-col md:col-span-3">
      <Background showNav={showNav} setShowNav={setShowNav} />
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