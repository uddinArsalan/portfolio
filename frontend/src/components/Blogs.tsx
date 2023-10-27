import { useQuery, gql } from '@apollo/client';

interface blogTypes {
  title : string,
  brief : string,
  coverImage: string
  dateAdded: string
  slug: string
}

const GET_USER_BLOGS = gql`{
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

const Blogs = () => {
  // const [articles,setArticles] = useState<blogTypes[]>([])
  const { loading, data } = useQuery(GET_USER_BLOGS);
  // const articles = data.user.publication.posts
  // useEffect(() => {
    //   if(data)
  //     setArticles(data.user.publication.posts)
  // },[])
  const articles = loading ? undefined : data.user.publication.posts
  const BASE_URL = "https://arsalanu.hashnode.dev/"
  // console.log(data.user.publication.posts)
  console.log(articles)
  return (
    <div className='bg-black grid p-16 gap-8 place-items-center' id='blogs'>
      <div className='text-[rgb(136,206,2)] text-4xl font-bold'>BLOGS..</div>
      {articles && articles.map((article : blogTypes) => (
        <div key={article.title} className='bg-gray-900 text-black p-6 flex flex-col gap-8'>
          <img src={article.coverImage} alt="" className='md:w-3/4'/>
          <h2 className='text-lg md:text-2xl text-[rgb(219,221,216)] bg-black p-2 rounded-lg w-fit'>{article.title}</h2>
          <p className='text-md md:text-xl font-semibold text-white md:font-bold'>{article.brief}</p>
          <p className='text-[rgb(197,255,88)] font-bold'>{article.dateAdded}</p>
          <a href={BASE_URL+article.slug} target='_blank'>
            <div className='flex justify-between gap-6 cursor-pointer p-2 items-center hover:bg-black w-fit rounded-lg'>
          <div className='text-white'>Read More...</div>
          <i className="fa-solid fa-square-arrow-up-right hover:text-[rgb(197,255,88)] text-gray-900 text-4xl"></i>
          </div>
          </a>
        </div> 
       ))}
    </div>
  );
};

export default Blogs