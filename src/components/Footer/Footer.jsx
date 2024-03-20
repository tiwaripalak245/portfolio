import React, { useRef } from "react";
import "../Footer/Footer.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k9t22dp", "template_9xu7l3m", form.current, {
        publicKey: "fHlLcpR1aoKaKqYbm",
      })
      .then(
        () => {
          toast.success("message sent!!");
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <footer
        className="footer-sec"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className="button-box"

        >
          <button className="head-button">Contact Me</button>
        </div>
        <div className="contact-form">
          <div className="footer-form">
            <form className="form-control" ref={form} onSubmit={sendEmail}>
              <h1 className="title">Let's Connect</h1>

              <div className="input-field">
                <label>Name</label>
                <input type="text" name="from_name" placeholder="Enter Name" required/>
              </div>
              <div className="input-field">
                <label>Email</label>
                <input type="email" name="from_email" placeholder="Enter Email" required/>
              </div>
              <div className="input-field">
                <label>Message</label>
                <textarea name="message" placeholder="Enter message" required />
              </div>
              <input className="submit-btn" type="submit" value="Send" />
            </form>
          </div>
          <div className="footer-text"
          
          >
            <h1 className="title">Contact Info</h1>
            <p>
              <FaUser /> : Palak Tiwari
            </p>
            <p>
              <IoCall /> : 8962922380
            </p>
            <p>
              <MdEmail /> : tiwaripalak836@gmail.com
            </p>
            <p>
              <FaLinkedin /> :
              https://www.linkedin.com/in/palak-tiwari-3a4684196/
            </p>
          </div>
        </div>
        <p style={{textAlign: "center", padding: "20px"}}>Developed by Palak Tiwari | Copyright ©2024 All rights reserved |</p>
      </footer>
    </>
  );
};

export default Footer;
