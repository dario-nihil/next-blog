import styles from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input id="text" type="name" required />
          </div>
        </div>
        <div className={styles.contorl}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5"></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
