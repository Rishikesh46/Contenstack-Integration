import Link from "next/link";
import getAllBlogs from "../../contentstack/queries/getAllBlogs";
import getblogbyid from "../../contentstack/queries/getblogbyid";
import Navigation from "../../components/Navigation";
import styles from "../../styles/Blog.module.css";
import Footer from "../../components/Footer";

export default function Blog(props) {
  return (
    <>
      <div>
        <Navigation />
        <div className={styles["blog-container"]}>
          <div>
            <h1 className={styles["blog-title"]}>{props.blogs.blog_title}</h1>
            <div>
              <img
                className={styles["blog-image"]}
                src={props.blogs.blog_image.url}
                alt="banner"
              />
            </div>
            <p className={styles["blog-content"]}>{props.blogs.blog_content}</p>
          </div>
          <div>
            <div>
              <h3>Related Players</h3>
              {props.blogs.related_links.map((link, index) => {
                return (
                  <div key={index}>
                    <Link href={link.related_links[0].uid}>
                      <p>{link.blog_title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export const getStaticProps = async (context) => {
  let data = await getblogbyid(context.params.id);
  return {
    props: {
      blogs: { ...data },
    },
  };
};
export const getStaticPaths = async () => {
  let data = await getAllBlogs("blogrender");
  let paths = data[0].map((blogs) => {
    return {
      params: {
        id: `${blogs.uid}`,
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
