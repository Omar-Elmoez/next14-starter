import Links from "./links/Links";
import styles from "./navbar.module.css";
const { container, logo } = styles;
const Navbar = () => {
  return (
    <nav className={container}>
      <div className={logo}>Logo</div>
      <Links />
    </nav>
  );
};

export default Navbar;
