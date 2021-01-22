import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navigation() {
  return (
    <nav className={styles["header"]}>
      <div className={styles["navigation"]}>
        <ul>
          <li className={styles["nav-link"]}>
            <Link className={styles["blog-title"]} href={{ pathname: `/` }}>
              <p>Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
