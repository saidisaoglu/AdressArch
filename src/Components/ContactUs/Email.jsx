import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllInformationJS from "../../informations";
import styles from "./ContactUs.module.scss";

export const ContactUsEmail = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_header: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      formData.from_name === "" ||
      formData.from_email === "" ||
      formData.from_header === "" ||
      formData.message === ""
    ) {
      toast.error(AllInformationJS.texts.failedMessage);
      return;
    }

    emailjs
      .sendForm(
        "service_44cox43",
        "template_s0ys9jb",
        form.current,
        "0G8bpjIIutHH7e4lU"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(AllInformationJS.texts.succesfullyMessage);
          setFormData({
            from_name: "",
            from_email: "",
            from_header: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.inputsContainer}>
      <div className={styles.fullnameAndEmailElements}>
        <input
          type="text"
          name="from_name"
          id="name"
          placeholder={AllInformationJS.texts.fullName}
          value={formData.from_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="from_email"
          id="email"
          placeholder={AllInformationJS.texts.email}
          value={formData.from_email}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.headerAndMessageElements}>
        <input
          type="text"
          name="from_header"
          id="header"
          placeholder={AllInformationJS.texts.header}
          value={formData.from_header}
          onChange={handleInputChange}
        />
        <input
          className={styles.messageInput}
          type="text"
          name="message"
          id="message"
          placeholder={AllInformationJS.texts.message}
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.sendButtonElement}>
        <input
          className={styles.sendButton}
          type="submit"
          value={AllInformationJS.texts.sendButton}
          disabled={
            formData.from_name === "" &&
            formData.from_email === "" &&
            formData.from_header === "" &&
            formData.message === ""
          }
        />
      </div>
    </form>
  );
};
