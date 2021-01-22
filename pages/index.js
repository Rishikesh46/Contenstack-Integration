import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import getAllBlogs from "../contentstack/queries/getAllBlogs"
import Navigation from "../components/Navigation"
import Footer from '../components/Footer'

export default function Home(props) {

let blogs = props.blogs;
  console.log(blogs);
  return (
   
    <div>
       <Navigation/>
      {blogs.map((blogs) => {
        return (
          <div className={styles["container1"]}>
            <h1 className={styles["blog-title"]}>{blogs.blog_title}</h1>
            <Link href={"/blogs/" +blogs.uid}>
              <img className={styles["banner-image"]} src={blogs.blog_image.url} alt="banner" />
            </Link>
            <Link href={"/blogs/" +blogs.uid}>
              <p>{blogs.blog_content}</p>
            </Link>
          </div>)
      })}
      <Footer/>
    </div>
  );

}

export const getStaticProps = async () => {
  const blogs = await getAllBlogs("blogrender");
  return {
    props: { blogs: [...blogs[0]] },
  };
};
