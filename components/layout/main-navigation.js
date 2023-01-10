import Link from "next/link";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header>
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
