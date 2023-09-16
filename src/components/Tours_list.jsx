import React, { useEffect, useState } from "react";
import thailand from "../assets/thailad.png";
import bali from "../assets/bali.png";
import dubai from "../assets/dubai.png";
import axios from "axios";
import iconsss from "../assets/tours_icon.png";
export const Tours_list = () => {
  const [touristData, settouristData] = useState([]);
  const fetchTouristData = () => {
    axios
      .get(`https://simple-onee.onrender.com/api/tours?populate=*`)
      .then((data) => {
        settouristData(data.data.data);
      });
  };
  useEffect(() => {
    fetchTouristData();
  }, []);
  touristData.map((data, key) => {
    return console.log(data?.attributes.tours_innerimage.data, "aah");
  });
  console.log(touristData, "touristData");
  // console.log(process.env.REACT_URL, "sahi hai bhai");
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {touristData.map((data, key) => {
            console.log(
              data?.attributes?.images?.data[0]?.attributes?.url,
              "show images"
            );
            return (
              <div
                className={`row ${
                  key % 2 == 0 ? "" : "flex-row-reverse"
                } mb-5 tour_list_images`}
              >
                <div className="col-lg-6">
                  <img
                    style={{ width: "100%", height: "534px" }}
                    src={`${data?.attributes?.images?.data?.attributes?.url}`}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 tour_image_content">
                  <h1 className="tours_title">{data.attributes.title}</h1>
                  <h5 className="mt-3">About {data.attributes.title}</h5>
                  <p className="mt-3">{data.attributes.description}</p>
                  {/* <div className="mt-3">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter.
                  </div> */}
                  {/* <div
                    className="d-flex justify-content-start align-items-center"
                    style={{ marginBottom: "2rem", marginTop: "2rem" }}
                  >
                    <img src={iconsss} alt="" />{" "}
                    <h3 className="text-bold" style={{ marginLeft: "1rem" }}>
                      12 Day 11 Night
                    </h3>
                  </div> */}
                  <div className="container">
                    <div className="row">
                      {data?.attributes?.tours_innerimage?.data?.map((data) => {
                        return (
                          <div
                            className="col-lg-4"
                            style={{ marginTop: "60px" }}
                          >
                            <img
                              src={data?.attributes?.url}
                              className="tours_innerImage"
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="row">
            <div className="col-lg-6">
              <img src={thailand} alt="" />
            </div>
            <div className="col-lg-6">
              <h1>Ultimate Thailand</h1>
              <h5 className="mt-3">About Thailand</h5>
              <p className="mt-3">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter.
              </p>
              <div className="mt-3">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter.
              </div>
              <h3 className="text-bold"> 12 Day 11 Night</h3>
            </div>
          </div> */}
          {/* <div className="row flex-row-reverse">
            <div className="col-lg-6 mt-3">
              <img src={dubai} alt="" />
            </div>
            <div className="col-lg-6 mt-3">
              <h1>Dubai</h1>
              <h5 className="mt-3">About Dubai</h5>
              <p className="mt-3">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter.
              </p>
              <div className="mt-3">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter.
              </div>
              <h3 className="text-bold"> 12 Day 11 Night</h3>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 mt-3">
              <img src={bali} alt="" />
            </div>
            <div className="col-lg-6 mt-3">
              <h1>Bali Indonesia</h1>
              <h5 className="mt-3">About Bali Indonesia</h5>
              <p className="mt-3">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter.
              </p>
              <div className="mt-3">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter.
              </div>
              <h3 className="text-bold"> 12 Day 11 Night</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
