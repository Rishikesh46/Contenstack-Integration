import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BlogCard from "../components/BlogCard";
import getAllBlogs from "../contentstack/queries/getAllBlogs"

export default function Home(props) {

let blogs = props.blogs;
  console.log(blogs);
  return (
    <div>
      {blogs.map((blogs) => {
        return (
          <div>
            <h1>{blogs.blog_title}</h1>
            <img src={blogs.blog_image.url} alt="banner" />;
            <p>{blogs.blog_content}</p>
       </div>) })}
    </div>
  );



  
}

export const getStaticProps = async () => {
  const blogs = await getAllBlogs("blogrender");
  return {
    props: { blogs: [...blogs[0]] },
  };
};
