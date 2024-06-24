
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className="pageContainer">
      <div className={`imgContainer ${styles.contactImgContainer}`}>
        <Image src="/contact.png" fill alt="" className="img" />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
