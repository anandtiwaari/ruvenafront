import React, { useEffect, useState } from "react";
// import "../index.css";
// import image1 from "../assets/travel_image_1.jpg";
import image2 from "../assets/travel_image_2.jpg";
import image3 from "../assets/travel_image_3.jpg";
import image4 from "../assets/travel_image_4.jpg";
import headerScroll_1 from "../assets/Header_scroll_1.png";
import headerScroll_2 from "../assets/Header_scroll_2.png";
import headerScroll_3 from "../assets/Header_scroll_3.png";
import headerScroll_4 from "../assets/Header_scroll_4.png";
import insta_head from "../assets/insta_icon_head.png";
import facebook_head from "../assets/facebook_icon_head.png";
import { NavigationBar } from "./NavigationBar";
import callIconHead from "../assets/call_icon_head.png";
import { useLocation } from "react-router-dom";
import Destination_final from "../assets/Destination_final.png";
import Tours_final from "../assets/Tours_final.png";
import Blogs_final from "../assets/Blogs_final.png";
import HoneyMoon from "../assets/HoneyMoon.png";
import corporate from "../assets/corporate_incentive.png";
import Group_tour from "../assets/Group_tour.png";
import Adventure_tour from "../assets/Adventure_tour.png";
import aboutUs from "../assets/About_us.png";
export const CommonHeader = () => {
  const [loactionUrl, setloactionUrl] = useState();
  const location = useLocation();
  console.log(location, "asdasdasaslocation");
  console.log(loactionUrl, "loactionUrl");
  useEffect(() => {
    setloactionUrl(window.location.href);
  }, [window.location.href]);
  let images = [HoneyMoon, corporate, Group_tour, Adventure_tour];
  let content = [
    "Honeymoon Tour Packages",
    "Corporate Incentive Tours",
    "Group Tour",
    "Adventure Tours",
  ];

  let contentGeneral = ["DESTINATION LIST", "TOURS", "BLOGS", "About us"];

  return (
    <div>
      <div>
        <div className="card upperBar">
          <div className="card-body d-flex justify-content-around upperBar_comp">
            <div className="left">
              Follow us: <img src={insta_head} className="head_insta" alt="" />{" "}
              <img src={facebook_head} className="head_fb" alt="" />
            </div>
            <div className="right">
              <img src={callIconHead} style={{ marginRight: "3px" }} alt="" />{" "}
              +91 8511255523
            </div>
          </div>
        </div>
        <NavigationBar />
        <div className="carasouel_container">
          <div id="carouselExampleIndicators" className="carousel slide">
            {location.pathname === "/" && (
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 3"
                ></button>
              </div>
            )}

            <div className="carousel-inner">
              {images.map((data, key) => {
                if (location.pathname === "/") {
                  return (
                    <div
                      className={` ${
                        location.pathname === "/" ? "carousel-item" : ""
                      } ${key == 0 ? "active" : ""}`}
                    >
                      <img
                        style={{ opacity: "+1" }}
                        src={data}
                        className="d-block w-100 image-cara"
                        alt="..."
                      />
                      <div className="carousel-caption">
                        <h3 style={{ fontSize: "80px", fontWeight: "700 " }}>
                          {location.pathname === "/"
                            ? content[key]
                            : location.pathname?.includes("tour_")
                            ? content[2]
                            : location.pathname?.includes("blog_")
                            ? content[3]
                            : location.pathname?.includes("destination")
                            ? content[1]
                            : "Your Journey Begins"}
                        </h3>
                        <p className="slider_text">
                          A journey of a 1000 miles starts with a single step.
                          Import the full demo content with 1 click and create a
                          head-turning website for your travel agency.
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
              {location.pathname.includes("destination") && (
                <div
                // className={` ${
                //   location.pathname === "/" ? "carousel-item" : ""
                // } ${key == 0 ? "active" : ""}`}
                >
                  <img
                    style={{ opacity: "+1" }}
                    src={Destination_final}
                    className="d-block w-100 image-cara"
                    alt="..."
                  />
                  <div className="carousel-caption carousel-captionother">
                    <h3 style={{ fontSize: "80px", fontWeight: "700 " }}>
                      {location.pathname.includes("destination") &&
                        contentGeneral[0]}
                    </h3>
                    <p className="slider_text">
                      A journey of a 1000 miles starts with a single step.
                      Import the full demo content with 1 click and create a
                      head-turning website for your travel agency.
                    </p>
                  </div>
                </div>
              )}
              {location.pathname.includes("tour_list") && (
                <div
                // className={` ${
                //   location.pathname === "/" ? "carousel-item" : ""
                // } ${key == 0 ? "active" : ""}`}
                >
                  <img
                    style={{ opacity: "+1" }}
                    src={Tours_final}
                    className="d-block w-100 image-cara"
                    alt="..."
                  />
                  <div className="carousel-caption carousel-captionother">
                    <h3 style={{ fontSize: "80px", fontWeight: "700 " }}>
                      {location.pathname.includes("tour_list") &&
                        contentGeneral[1]}
                    </h3>
                    <p className="slider_text">
                      A journey of a 1000 miles starts with a single step.
                      Import the full demo content with 1 click and create a
                      head-turning website for your travel agency.
                    </p>
                  </div>
                </div>
              )}
              {location.pathname.includes("blog_list") && (
                <div
                // className={` ${
                //   location.pathname === "/" ? "carousel-item" : ""
                // } ${key == 0 ? "active" : ""}`}
                >
                  <img
                    style={{ opacity: "+1" }}
                    src={Blogs_final}
                    className="d-block w-100 image-cara"
                    alt="..."
                  />
                  <div className="carousel-caption carousel-captionother">
                    <h3 style={{ fontSize: "80px", fontWeight: "700 " }}>
                      {location.pathname.includes("blog_list") &&
                        contentGeneral[2]}
                    </h3>
                    <p className="slider_text">
                      A journey of a 1000 miles starts with a single step.
                      Import the full demo content with 1 click and create a
                      head-turning website for your travel agency.
                    </p>
                  </div>
                </div>
              )}
              {location.pathname.includes("about_us") && (
                <div
                // className={` ${
                //   location.pathname === "/" ? "carousel-item" : ""
                // } ${key == 0 ? "active" : ""}`}
                >
                  <img
                    style={{ opacity: "+1" }}
                    src={aboutUs}
                    className="d-block w-100 image-cara"
                    alt="..."
                  />
                  <div className="carousel-caption carousel-captionother">
                    <h3 style={{ fontSize: "80px", fontWeight: "700 " }}>
                      {location.pathname.includes("about_us") &&
                        contentGeneral[3]}
                    </h3>
                    <p className="slider_text">
                      A journey of a 1000 miles starts with a single step.
                      Import the full demo content with 1 click and create a
                      head-turning website for your travel agency.
                    </p>
                  </div>
                </div>
              )}
              {/* <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div> */}
            </div>
            {}
            {location.pathname === "/" && (
              <React.Fragment>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
