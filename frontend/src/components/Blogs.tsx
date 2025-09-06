import React from 'react';
import { useQuery, gql } from "@apollo/client";

interface BlogTypes {
  title: string;
  brief: string;
  publishedAt: string;
  url: string;
  coverImage: {
    url: string
  };
}

interface Node {
  node: BlogTypes
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
  return Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className="bg-gray-800 p-6 flex flex-col w-full gap-4 animate-pulse rounded-lg"
    >
      <div className="bg-gray-700 h-48 rounded-md"></div>
      <div className="bg-gray-700 h-6 w-3/4 rounded-md"></div>
      <div className="bg-gray-700 h-4 w-full rounded-md"></div>
      <div className="bg-gray-700 h-4 w-full rounded-md"></div>
      <div className="bg-gray-700 h-4 w-2/3 rounded-md"></div>
      <div className="bg-gray-700 h-8 w-1/3 rounded-md"></div>
    </div>
  ));
};

const dateFormatter = (originalTimestamp: string): string => {
  const date = new Date(originalTimestamp);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC"
  }).format(date);
}

const Blogs: React.FC = () => {
  const { loading, data } = useQuery(GET_USER_BLOGS);
  const articles: Node[] = loading ? [] : data?.publication?.posts?.edges || [];

  return (
    <div className="bg-gradient-to-b from-black to-neutral-900 py-16 px-4 sm:px-6 lg:px-8" id="blogs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
          Blogs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? renderSkeleton()
            : articles.map((article: Node) => (
                <div
                  key={article.node.title}
                  className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300 flex flex-col"
                >
                  <img src={article.node.coverImage.url} alt="" className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2">{article.node.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{article.node.brief}</p>
                    <p className="text-emerald-300 text-sm mb-4">{dateFormatter(article.node.publishedAt)}</p>
                    <a 
                      href={article.node.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mt-auto"
                    >
                      Read More
                      <i className="fa-solid fa-square-arrow-up-right ml-2"></i>
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;