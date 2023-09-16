import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="contact_form_container">
        <div className="contactForm">
          <div className="row" style={{ margin: "0px" }}>
            <div className="col-lg-6" style={{ margin: "0px", padding: "0px" }}>
              <div className="image-background">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                      <h1 className="display-2 discount_percent">
                        Best Customized{" "}
                      </h1>
                      <p className="leads">Holiday Packages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{
                marginLeft: "0px",
                marginRight: "0px",
                padding: "0px",
                backgroundColor: "#F7F7F7",
              }}
            >
              <section
                className="contact-us"
                id="contact-section"
                style={{ padding: "20px" }}
              >
                <form
                  //   id="form-submit"
                  action="https://formspree.io/f/moqodrre"
                  method="POST"
                >
                  <div className="section-heading">
                    <h4 className="contact_us">Contact us</h4>
                  </div>

                  <div className="inputField">
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      autocomplete="on"
                      required
                    />
                    <span className="valid_info_name"></span>
                  </div>

                  <div className="inputField">
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phone"
                      placeholder="Your Phone number"
                      required=""
                    />
                    <span className="valid_info_email"></span>
                  </div>
                  <div className="inputField">
                    <input
                      type="Email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      required=""
                    />
                    <span className="valid_info_email"></span>
                  </div>

                  <div className="inputField">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message"
                    ></textarea>
                    <span className="valid_info_message"></span>
                  </div>

                  <button
                    type="submit"
                    id="form-submit"
                    className="main-gradient-button button_contact  monteseraat_btn"
                    style={{
                      // backgroundColor: "red",
                      color: "white",
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   console.log("clcick");
                    // }}
                  >
                    Submit
                  </button>
                  {/* <div className="inputField btn"></div> */}
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
