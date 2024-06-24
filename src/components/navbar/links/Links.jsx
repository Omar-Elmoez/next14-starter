"use client";
import Navlink from "./navlink/Navlink";
import styles from "./links.module.css";
import { useState } from "react";


const { logout, menuButton, mobileLinks } = styles;
const session = false;
const isAdmin = false;
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
const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <div className={styles.links}>
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
      </div>
      <button onClick={() => setOpen(!open)} className={menuButton}>Menu</button>
      {open && (
        <section className={mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </section>
      )}
    </section>
  );
};

export default Links;
