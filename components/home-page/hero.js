import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/dario.jpg"
          alt="An image showing Dario"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Dario</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
