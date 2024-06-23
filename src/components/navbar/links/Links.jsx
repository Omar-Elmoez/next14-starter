import Navlink from "./navlink/Navlink";
import styles from "./links.module.css";

const { logout, menuButton, mobileLinks } = styles;
const session = false;
const isAdmin = false;
const Links = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  return (
    <section className={styles.links}>
      {links.map((link) => (
        <Navlink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <Navlink item={{ title: "Admin", url: "/admin" }} />}
          <button className={logout}>Logout</button>
        </>
      ) : (
        <Navlink item={{ title: "Login", url: "/login" }} />
      )}
    </section>
  );
};

export default Links;
