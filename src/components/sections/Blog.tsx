
import { Calendar, Clock, User } from "lucide-react";
import SectionTitle from "../SectionTitle";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, author, date, readTime, image, slug }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex flex-wrap text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <User className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <a
          href={`/blog/${slug}`}
          className="inline-block text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
      author: "Vanshika",
      date: "April 10, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg",
      slug: "getting-started-with-react-hooks",
    },
    {
      id: 2,
      title: "Building a RESTful API with Node.js and Express",
      excerpt: "A step-by-step guide to creating a RESTful API using Node.js and Express framework.",
      author: "Vanshika",
      date: "March 22, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg",
      slug: "building-restful-api-nodejs-express",
    },
    {
      id: 3,
      title: "Introduction to Supabase for Beginners",
      excerpt: "Discover how to use Supabase as a Firebase alternative for your next web project.",
      author: "Guest Author",
      date: "February 15, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg",
      slug: "introduction-to-supabase-beginners",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <SectionTitle title="Blog" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          These are sample blog posts. Actual blog data will be fetched from Supabase once integrated.
        </p>
      </div>
    </div>
  );
};

export default Blog;
