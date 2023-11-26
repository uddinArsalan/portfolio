import { useQuery, gql } from "@apollo/client";

interface blogTypes {
  title: string;
  brief: string;
  publishedAt : string;
  url: string;
  coverImage: {
    url : string
  };
}

interface Node {
  node : blogTypes
}

const GET_USER_BLOGS = gql`
  {
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

const renderSkeleton = () => {
  // Create an array of dummy elements to represent the loading state
  const skeletons = Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="bg-gray-800 p-6 flex flex-col w-full gap-6 md:gap-8 animate-pulse"
    >
      <div className="bg-gray-700 h-80 md:h-96 md:w-3/4 rounded-md"></div>

      <div className="bg-gray-700 h-8 p-3 w-3/4 rounded-md"></div>
      <div className="flex flex-col gap-3">
      <div className="bg-gray-700 p-2 w-full rounded-md"></div>
      <div className="bg-gray-700 p-2 w-full rounded-md"></div>
      <div className="bg-gray-700 p-2 w-full rounded-md"></div>
      <div className="bg-gray-700 p-2 w-full rounded-md"></div>
      </div>
      <div className="bg-gray-700 h-6 p-4 w-1/2 rounded-md"></div>
      <div className="bg-gray-700 h-16 md:p-4 md:w-1/4 w-1/3 rounded-md"></div>
    </div>
  ));
  return skeletons;
};

const Blogs = () => {
  // const [articles,setArticles] = useState<blogTypes[]>([])
  const { loading, data } = useQuery(GET_USER_BLOGS);
  console.log(data)
  const articles: Node[] = loading
    ? undefined
    : data.publication.posts.edges
  return (
    <div
      className="bg-black grid md:p-16 p-8 gap-4 md:gap-8 place-items-center"
      id="blogs"
    >
      <div className="text-[rgb(136,206,2)] text-4xl font-bold">BLOGS..</div>
      {articles
        ? articles.map((article: Node) => (
            <div
              key={article.node.title}
              className="bg-gray-900 text-black p-6 flex flex-col gap-8"
            >
              <img src={article.node.coverImage.url} alt="" className="w-3/4" />
              <h2 className="text-lg md:text-2xl text-[rgb(219,221,216)] bg-black p-2 rounded-lg w-fit">
                {article.node.title}
              </h2>
              <p className="text-md md:text-xl font-semibold text-white md:font-bold">
                {article.node.brief}
              </p>
              <p className="text-[rgb(197,255,88)] font-bold">
                {article.node.publishedAt}
              </p>
              <a href={article.node.url} target="_blank">
                <div className="flex justify-between gap-6 cursor-pointer p-2 items-center hover:bg-black w-fit rounded-lg">
                  <div className="text-white">Read More...</div>
                  <i className="fa-solid fa-square-arrow-up-right hover:text-[rgb(197,255,88)] text-gray-900 text-4xl"></i>
                </div>
              </a>
            </div>
          ))
        : renderSkeleton()}
    </div>
  );
};

export default Blogs;
