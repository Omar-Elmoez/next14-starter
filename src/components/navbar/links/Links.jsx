import Link from "next/link";

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

  return links.map((link) => (
    <Link href={link.url} key={link.title}>
      {link.title}
    </Link>
  ));
};

export default Links;
