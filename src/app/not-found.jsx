import Link from "next/link";

const Notfound = () => {

  return <article>
    <h2>Not Found</h2>
    <p>Could not find requested resource</p>
    <Link href="/">Back to home</Link>
  </article>;
}

export default Notfound