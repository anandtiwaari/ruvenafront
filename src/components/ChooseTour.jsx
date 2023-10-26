import React from "react";
import "./ChooseTour.css";
import flightIcon from "../assets/flight_icon.svg";
import taxiIcon from "../assets/Taxi_icon.svg";
import TrainIcon from "../assets/train_icon.svg";
import HotelIcon from "../assets/Hotel_icon.svg";
import tour_sight from "../assets/tour_sight_seeing.png";
import tour_ticket from "../assets/tour_ticket.png";
import tour_transportation from "../assets/tour_transportaion.png";
import tour_meals from "../assets/tours_meals.png";
import customizedTours from "../assets/newCustomized-Tours.svg";
export const ChooseTour = () => {
  return (
    <div className="choose_tour_section">
      <div className="image-background3">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="display-2 choose_tour_title">Our Services</h1>
              <p className="lead">
                Experience top-notch Services from Ruvena Holidays. Explore
                tailor-made Tour Packages across the world personalized just for
                you. Start your dream journey today!
              </p>
              <div className="AllBookings d-flex justify-content-evenly flex-wrap">
                <div className="icon_container d-flex flex-column align-items-center flex-wrap">
                  <img src={flightIcon} alt="" className="flight_icon" />
                  <span>Air Ticket </span>
                </div>
                <div className="icon_container d-flex flex-column align-items-center flex-wrap">
                  <img
                    src={tour_transportation}
                    alt=""
                    className="flight_icon"
                  />
                  <span>Transportation</span>
                </div>
                <div className="icon_container d-flex flex-column align-items-center flex-wrap">
                  <img src={tour_sight} alt="" className="flight_icon" />
                  <span>Sightseeing</span>
                </div>
                <div className="icon_container d-flex flex-column align-items-center flex-wrap">
                  <img src={customizedTours} alt="" className="flight_icon" />
                  <span>Customized Tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
