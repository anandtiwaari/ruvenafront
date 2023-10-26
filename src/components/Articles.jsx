import React from "react";
import "./Articles.css";
import imageHorizontal from "../assets/simplyPerfect.svg";
import secondCardOne from "../assets/card_second_1.svg";
import secondCardTwo from "../assets/card_second_2.svg";
import secondCardThree from "../assets/card_second_3.svg";
import tour1 from "../assets/tours_1.png";
import tour2 from "../assets/tours_2.png";
import tour3 from "../assets/tours_3.png";
import Bali from "../assets/newImage/Bali.png";
import Dubai from "../assets/newImage/Dubai.png";
import Maldives from "../assets/newImage/Maldives.png";
import singapore_malaysia from "../assets/newImage/Singapore-Malesiya.png";
import thailand from "../assets/newImage/Thailand.png";
import Vietnam from "../assets/newImage/Vietnam.png";
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
                    A Simply Perfect Place to Lost - tour
                  </div>
                  <p className="simply_perfect_description">
                    A Simply Perfect Place to Get Lost" is an ideal trip for
                    travelers looking to explore a destination off the beaten
                    path. This tour takes you to a remote and magnificent
                    location where you can immerse yourself in natural beauty,
                    solitude, and local culture.
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
                        src={Dubai}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Dubai</h2>
                        <p className="card-text">
                          Dubai is in every person’s bucket list and it is no
                          surprise why. Whether it is the Palm Jumeirah or the
                          Burj Khalifa, there is so much that Dubai has to
                          offer. Buildings, the likes of which you have never
                          seen before, greet you in Dubai like no other city in
                          the world.
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
                        src={Maldives}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Maldives</h2>
                        <p className="card-text">
                          The Maldives is a tropical retreat famous for itds
                          azure waters, abundant marine life, and spotless
                          beaches.
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
                        src={Bali}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Bali</h2>
                        <p className="card-text">
                          Bali has been dubbed the Island of the Gods due to its
                          breathtaking natural beauty, rich cultural heritage,
                          and stunning coastline.
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
                        src={thailand}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Thailand</h2>
                        <p className="card-text">
                          Friendly and foodie, hedonistic and ancient, cultured
                          and curious, a destination that greets visitors with a
                          smile, known as The land of Smiles.
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
                        src={singapore_malaysia}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Sinagpore Malaysia</h2>
                        <p className="card-text">
                          Singapore city is located at the southern tip of the
                          Malay peninsula, about 85 miles north of the Equator.
                          It is loaded with vibrant history.
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
                        src={Vietnam}
                        alt="a snow-capped mountain range"
                      />
                      <div className="card-img-overlay text-white image_text_tour">
                        <h2 className="card-title">Vietnam</h2>
                        <p className="card-text">
                          There is a general belief that Vietnam is still a
                          damaged, poor, war-torn, and unsafe nation. But anyone
                          who thinks that is in for a shock. Vietnam tourism is
                          simply stunning and historical, from the stunning
                          scenery to the friendly locals to the delicious
                          coffee.
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
