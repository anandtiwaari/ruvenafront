import React from "react";
import rovenaLogo from "../assets/RuvenaLogo.svg";
import callLogo from "../assets/call_icon.svg";
import EmailLogo from "../assets/email_icon.png";
import LocationLogo from "../assets/location_icon.png";
import instaLogo from "../assets/insta_icon.png";
import FbLogo from "../assets/fb_icon.png";
import YoutubeLogo from "../assets/youtube_icon.png";
import footer1_insta1 from "../assets/footer_insta1.png";
import footer1_insta2 from "../assets/footer_insta2.png";
import footer1_insta3 from "../assets/footer_insta3.png";
import footer1_insta4 from "../assets/footer_insta4.png";
import footer1_insta5 from "../assets/footer_insta5.png";
import footer1_insta6 from "../assets/footer_insta6.png";
export const Footer = () => {
  return (
    <div className="whole_footer" style={{ padding: "100px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="ruvenaLogo_footer mt-2">
              <img src={rovenaLogo} alt="" />
            </div>
            <div className="footerdecription mt-3">
              <p className="text-white">
                At Ruvena Holidays, we specialize in creating tailor-made
                holiday experiences that cater to your specific needs and
                preferences.
              </p>
            </div>
            <div className="wrapper_icons_detials mt-4 mb-4">
              <div className="call_footer mt-2">
                <img src={callLogo} alt="" />
                <span className="text-white " style={{ marginLeft: "9px" }}>
                  (+91) 8866555523 , 7600655523
                </span>
              </div>
              <div className="Email_footer mt-2 ">
                <img src={EmailLogo} alt="" />
                <span className="text-white" style={{ marginLeft: "9px" }}>
                  info@ruvenaholidays.com
                </span>
              </div>
              <div className="Location_footer mt-2 ">
                <img src={LocationLogo} alt="" />
                <span className="text-white" style={{ marginLeft: "9px" }}>
                  UGF-115, Sampann Complex, Opp. Hocco Eatery, Swastik Society,
                  Navrangpura, Ahmedabad - 380009
                </span>
              </div>
            </div>
            <div className="Social_footer mt-2">
              <p className="text-white">Follow Now:</p>
              <img src={instaLogo} alt="" className="mt-2" />
              <img className="social_images mt-2" src={FbLogo} alt="" />
              <img className="social_images mt-2" src={YoutubeLogo} alt="" />
            </div>
          </div>
          {/* <div className="col-lg-4">
            <h3 className="text-white mt-2">Links</h3>
            <ul className="links_list text-white mt-3">
              <li className="kink_list_items">Destinations</li>
              <li className="kink_list_items" style={{ marginTop: "30px" }}>
                Tours
              </li>
              <li className="kink_list_items" style={{ marginTop: "30px" }}>
                Blogs
              </li>
            </ul>
          </div> */}
          <div className="col-lg-4 text-white">
            <h3 className="text-white mt-2 footer_latest">Latest Post</h3>
            <div className="latest_post mt-3">
              <p>The purpose of lorem ipsum is to create a natural looking</p>
              <div className="date" style={{ color: "grey" }}>
                03 August,2023
              </div>
            </div>
            <div className="latest_post" style={{ marginTop: "30px" }}>
              <p>
                As a tour packages company, our focus is to provide our clients
                with enriching and unforgettable travel experiences.
              </p>
              <div className="date" style={{ color: "grey" }}>
                03 August,2023
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h3 className="text-white mt-2 instagaram_footer">
              Instagram Feed
            </h3>
            <div className="row mt-3">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="instaposts">
                  <img src={footer1_insta1} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="instaposts">
                  <img src={footer1_insta2} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="instaposts">
                  <img src={footer1_insta3} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="instaposts">
                  <img src={footer1_insta4} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="instaposts">
                  <img src={footer1_insta5} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="instaposts">
                  <img src={footer1_insta6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer_rights_reserved text-center">
        <p style={{ color: "#8F9295" }}>
          © 2023 ruvenaholiday, All right Reserved
        </p>
      </div> */}
    </div>
  );
};
