import React from "react";
import "./Articles.css";
import imageHorizontal from "../assets/simplyPerfect.svg";
import secondCardOne from "../assets/card_second_1.svg";
import secondCardTwo from "../assets/card_second_2.svg";
import secondCardThree from "../assets/card_second_3.svg";
import tour1 from "../assets/tours_1.png";
import tour2 from "../assets/tours_2.png";
import tour3 from "../assets/tours_3.png";
import { Link } from "react-router-dom";
export const Articles = () => {
  return (
    <div className="second">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <div className="HorizontalImage">
              <div className="HorizontalContainer d-flex justify-content-center align-items-center ">
                <img src={imageHorizontal} className="A_simply" alt="" />
                <div className="wrapper_second_text">
                  <div className="content_horizontal">
                    A Simply Perfect Place To Get Lost
                  </div>
                  <p className="simply_perfect_description">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container " style={{ marginTop: "80px" }}>
        <div
          id="myCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner caraousel-inner-mobile">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <Link to="/tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour1}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Dubai</h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour2}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Maldives</h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour3}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Bali</h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-lg-4">
                  <Link to="/tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour1}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Thailand</h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour2}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Sinagpore Malaysia</h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour3}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Vietnam</h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a> */}
          <ol className="carousel-indicators carousel-indicators-cards">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4">
                  <Link to="/tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour1}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Mountains</h2>
                        <p className="card-text">
                          This is a photo of snowy-covered mountains. How
                          majestic.
                        </p>
                       
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour2}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Mountains</h2>
                        <p className="card-text">
                          This is a photo of snowy-covered mountains. How
                          majestic.
                        </p>
                    
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link to="tour_list">
                    <div className="card m-2">
                      <img
                        className="card-img card_image_second"
                        src={tour3}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Mountains</h2>
                        <p className="card-text">
                          This is a photo of snowy-covered mountains. How
                          majestic.
                        </p>
                 
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div> */
}
