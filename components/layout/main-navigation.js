import Link from "next/link";
import Logo from "./logo";

import styles from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
