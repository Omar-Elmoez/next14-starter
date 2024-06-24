import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {

  return (
    <div className="pageContainer">
      <div className="textContainer">
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="img"
        />
      </div>
    </div>
  );
};

export default AboutPage;