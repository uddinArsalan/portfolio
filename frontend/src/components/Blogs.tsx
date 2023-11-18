import { useQuery, gql } from "@apollo/client";

interface blogTypes {
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
  slug: string;
}

const GET_USER_BLOGS = gql`
  {
    user(username: "ArsalanU") {
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
  const articles: blogTypes[] = loading
    ? undefined
    : data.user.publication.posts;
  const BASE_URL = "https://arsalanu.hashnode.dev/";
  return (
    <div
      className="bg-black grid md:p-16 p-8 gap-4 md:gap-8 place-items-center"
      id="blogs"
    >
      <div className="text-[rgb(136,206,2)] text-4xl font-bold">BLOGS..</div>
      {articles
        ? articles.map((article: blogTypes) => (
            <div
              key={article.title}
              className="bg-gray-900 text-black p-6 flex flex-col gap-8"
            >
              <img src={article.coverImage} alt="" className="w-3/4" />
              <h2 className="text-lg md:text-2xl text-[rgb(219,221,216)] bg-black p-2 rounded-lg w-fit">
                {article.title}
              </h2>
              <p className="text-md md:text-xl font-semibold text-white md:font-bold">
                {article.brief}
              </p>
              <p className="text-[rgb(197,255,88)] font-bold">
                {article.dateAdded}
              </p>
              <a href={BASE_URL + article.slug} target="_blank">
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
