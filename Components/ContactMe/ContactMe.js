import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./ContactMe.module.scss";

const ContactMe = () => {
  const form = useRef();
  console.log(process.env);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,

            pauseOnFocusLoss: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.subContainer}>
        <div className={css.title}>
          <h3>Contact Me</h3>
        </div>
        <div className={css.formContainer}>
          <form ref={form} onSubmit={sendEmail} className={css.form}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" />
            <ToastContainer theme="dark" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
