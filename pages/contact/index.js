import Head from "next/head";

import ContactForm from "../../components/contact/contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me messagges." />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
