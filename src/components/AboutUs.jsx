import React from "react";
import aboutus from "../assets/About_us.png";
import aboutusinner from "../assets/AboutUs.png";
export const AboutUs = () => {
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",

        marginBottom: "100px",
        marginTop: "50px",
      }}
    >
      <div className="upperabout_us d-flex justify-content-center flex-column align-items-center">
        <h2 className="text-center">Welcome to our Holiday Company!</h2>
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
            width: "100%",
          }}
        >
          At Ruvena Holidays, we specialize in creating tailor-made holiday
          experiences that cater to your specific needs and preferences. We
          understand that a one-size-fits-all approach may not suit everyone's
          travel desires, which is why we go above and beyond to curate a truly
          personalized vacation just for you.
        </p>
      </div>
      <div className="image_content d-flex justify-content-around ">
        <div className="imageCont">
          <img
            src={aboutusinner}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="contact_main">
          <p>
            Our dedicated team of travel specialists is here to listen and
            understand your unique travel aspirations. Whether you're looking
            for a romantic getaway, a family adventure, a celebration with
            friends, or a solo exploration, we will meticulously design every
            aspect of your trip to ensure it exceeds your expectations.
          </p>
          <p>
            From the moment you reach out to us, we will take the time to
            discuss your travel requirements, interests, and budget. We believe
            that the key to a truly unforgettable holiday lies in the details,
            which is why we pay close atten tion to every element of your trip,
            from selecting the perfect accommodation to planning exclusive
            experiences and activities.
          </p>
          <p>
            Your satisfaction and peace of mind are our top priorities. Our
            experienced team will handle all the logistics, including flights,
            transfers, and reservations, leaving you free to relax and immerse
            yourself in your holiday. Throughout your journey, we are just a
            phone call or email away, ready to assist you with any questions or
            concerns that may arise.
          </p>
          <p>
            Your satisfaction and peace of mind are our top priorities. Our
            experienced team will handle all the logistics, including flights,
            transfers, and reservations, leaving you free to relax and immerse
            yourself in your holiday. Throughout your journey, we are just a
            phone call or email away, ready to assist you with any questions or
            concerns that may arise.
          </p>
          <p>
            Contact us today and let us turn your dream vacation into a reality.
            Welcome to Ruvena Holidays, where personalized travel begins.
          </p>
        </div>
      </div>
    </div>
  );
};
