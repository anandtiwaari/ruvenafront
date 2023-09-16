import React, { useEffect, useState } from "react";
import ruvenLogo from "../assets/RuvenaLogo.svg";
import logo_Ruvena from "../assets/Logo-Ruvena.svg";
import { Link } from "react-router-dom";
import { Blogs } from "./Blogs";
import { Button } from "primereact/button";
export const NavigationBar = () => {
  const [scrollShow, setscrollShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 56) {
        setscrollShow(true);
      } else {
        setscrollShow(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(scrollShow, "fgfgscrollShow");
  return (
    <div
      className="navbar_whole"
      style={
        !scrollShow
          ? { position: "fixed", top: "57px" }
          : { position: "fixed", top: "0px", background: "white" }
      }
    >
      <nav className="navbar navbar-expand-lg navbar-light navbar_ruvena">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={scrollShow ? logo_Ruvena : ruvenLogo}
              alt=""
              // style={
              //   scrollShow ? { filter: "drop-shadow(2px 4px 6px black)" } : {}
              // }
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll navbarUl  ${
                scrollShow ? "text-dark" : "text-white"
              }`}
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className={`nav-item text-white`}>
                <Link
                  className={`nav-link ${
                    scrollShow ? "text-dark" : "text-white"
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  scrollShow ? "text-dark" : "text-white"
                }`}
              >
                <Link
                  className={`nav-link ${
                    scrollShow ? "text-dark" : "text-white"
                  }`}
                  to="/destination"
                >
                  Domestic
                </Link>
              </li>
              <li
                className={`nav-item ${
                  scrollShow ? "text-dark" : "text-white"
                }`}
              >
                <Link
                  className={`nav-link ${
                    scrollShow ? "text-dark" : "text-white"
                  }`}
                  to="/tour_list"
                >
                  International
                </Link>
              </li>
              <li
                className={`nav-item ${
                  scrollShow ? "text-dark" : "text-white"
                }`}
              >
                <Link
                  className={`nav-link ${
                    scrollShow ? "text-dark" : "text-white"
                  }`}
                  to="/blog_list"
                >
                  Tour Itinerary
                </Link>
              </li>
              <li
                className={`nav-item ${
                  scrollShow ? "text-dark" : "text-white"
                }`}
              >
                <Link
                  className={`nav-link ${
                    scrollShow ? "text-dark" : "text-white"
                  }`}
                  to="/about_us"
                >
                  About Us
                </Link>
              </li>
              {/* <li className="nav-item text-white">
                <Link className="nav-link text-white" to="/destination">
                  Contact Us
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown text-white">
                <Link className="nav-link dropdown-toggle" to="/tour_list">
                  Tours
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item ">Blogs</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Contact us</Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Link
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
