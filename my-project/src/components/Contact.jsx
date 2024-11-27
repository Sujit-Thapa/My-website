// components/Contact.jsx
import React from "react";
import "./styles.css";


const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
