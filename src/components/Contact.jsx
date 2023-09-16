import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "./Message";

const Contact = () => {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_376o5nn",
        "template_l2onjch",
        form.current,
        "QeSzeh-WL53zBuiBJ"
      )
      //
      .then(
        (result) => {
          console.log(result.text);
          // Reset form fields after a successful submission
          form.current.reset();
          // Show a success message
          setTimeout(() => {
            setShowMessage(true);
          }, 1000); // Simulate a delay before showing the message
        },
        (error) => {
          console.log(error.text);
          // Show an error message
          setMessageText("Error sending message. Please try again later.");
          setShowMessage(true);
        }
      );
  };

  return (
    <section
      name="contact"
      className="min-h-screen flex flex-col justify-center w-full text-black p-4 lg:px-60"
    >
      <h6 className="text-lg uppercase font-bold text-center">contact</h6>
      <h1 className="text-4xl tracking-wider font-bold mb-8 text-primaryGreen text-center">
        Interested In Working Together? Let's Talk
      </h1>
      <form
        className="grid md:grid-cols-2 gap-2 lg:gap-6 w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          className="py-2 border-2 px-2 rounded-lg bg-transparent text-gray-900 md:col-span-1 col-span-2 focus:outline-none"
        />
        <input
          name="email"
          type="text"
          required
          placeholder="Enter your email"
          className="py-2 border-2 px-2 rounded-lg bg-transparent text-gray-900 md:col-span-1 col-span-2 focus:outline-none"
        />
        <input
          name="subject"
          type="text"
          required
          placeholder="Enter subject"
          className="col-span-2 px-2 rounded-lg py-2 border-2 bg-transparent text-gray-900 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Enter your message in detail"
          id=""
          cols="30"
          required
          rows="5"
          className=" py-2 bg-transparent border-2  px-2 rounded-lg col-span-2  focus:outline-none"
        ></textarea>
        <button
          className="col-span-2 bg-primaryGreen text-gray-200 text-lg font-bold p-2 rounded-md active:scale-95 shadow-lg"
          type="submit"
        >
          Contact Me
        </button>
      </form>

      <Message showMessage={showMessage} message="Data sent" />
    </section>
  );
};

export default Contact;
