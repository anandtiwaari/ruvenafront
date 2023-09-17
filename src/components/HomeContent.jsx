import React, { useEffect, useState } from "react";
import { Articles } from "./Articles";
import { ChooseTour } from "./ChooseTour";
import forest1 from "../assets/Forest_adventure.png";
import forest2 from "../assets/Forest_adventure2.png";
import forest3 from "../assets/Forest_adventure3.png";
import forest4 from "../assets/Forest_adventure4.png";
import { Link } from "react-router-dom";
import revieImage from "../assets/reviews_image.png";
import jamesDoe from "../assets/james_soe.png";
import ratingStar from "../assets/rating_start.png";
import axios from "axios";
import dateIcon from "../assets/data_icon.png";
import Goa1 from "../assets/Goa-min 1.png";
import kashmir from "../assets/kashmir_actual.png";
import Himachal from "../assets/Himachal-min 1.png";
import uttarakhand from "../assets/uttarakhand 1.png";
import { DialogButton } from "./DialogButton";
import { Carousel } from "primereact/carousel";
import { ProgressSpinner } from "primereact/progressspinner";
export const HomeContent = () => {
  const [homeBlogData, sethomeBlogData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentExotic, setcurrentExotic] = useState({
    payload: "",
    content: "",
    image: null,
  });
  const [products, setProducts] = useState([
    {
      desc: " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to havescrambled parts of Cicero's De Finibus Bonorum.",
    },
    {
      desc: " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to havescrambled parts of Cicero's De Finibus Bonorum.",
    },
    {
      desc: " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to havescrambled parts of Cicero's De Finibus Bonorum.",
    },
  ]);

  let HomeBlogContentData = () => {
    axios
      .get("https://simple-onee.onrender.com/api/blogs?populate=*")
      .then((data) => {
        sethomeBlogData(data.data.data);
      });
  };
  useEffect(() => {
    HomeBlogContentData();
  }, []);
  homeBlogData.map((d, i) => {
    console.log(
      d.attributes.featuredimage.data[0].attributes?.url,
      "asdjkhasdhjk"
    );
  });

  let UPdatedBlogData = [];
  homeBlogData.forEach((d) => {
    return UPdatedBlogData.push({ ...d.attributes, id: d.id });
  });
  console.log(UPdatedBlogData, "before___");
  UPdatedBlogData = UPdatedBlogData.map((d) => {
    return { ...d, updatedAt: new Date(d.updatedAt) };
  });
  console.log(UPdatedBlogData, "uiyuiyuiy---before");
  UPdatedBlogData?.sort((a, b) => b.updatedAt - a.updatedAt);
  console.log(UPdatedBlogData, "UPdatedBlogData");
  console.log(homeBlogData, "homeBlogData");
  let UPdatedBlogDatasorted = [];
  homeBlogData.forEach((d, k) => {
    return UPdatedBlogDatasorted.push({
      id: d.id,
      attributes: UPdatedBlogData[k],
    });
  });
  console.log(UPdatedBlogDatasorted, "UPdatedBlogDatasorted");

  const dataFormat = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    // Define the desired date format
    const dateFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    // Create a formatted date string using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat(
      "en-US",
      dateFormatOptions
    ).format(inputDate);
    return formattedDate;
  };
  console.log(dataFormat("2023-08-18T22:24:06.702Z"), "check check");
  const getexotic = (payload, content, img) => {
    return setcurrentExotic({ payload, content, img });
  };
  const contentOftheExotic = [
    "In those tumultuous and rebellious times in the sixties, it was then not the ‘sweet betel’ that was the prime attraction but a different kind of ‘weed’. But Goa, since those days of the angry generation, has moved on to attract a multitudinous, peaceful and cosmopolitan school of visitors from all around the globe. Down the corridors of time Goa has been different things to different people. To the Portuguese conquerors it was ‘Golden Goa’, the El Dorado, the ‘Rome of the East’. Such was its beauty and grandeur, that a traveller was moved to remark: ‘Whoever has seen Goa, need not visit Lisboa’-Lisbon, which was then the grand epicenter of the Portuguese dominions.While the contemporary traveller may not come to modern, thriving Goa ‘for the sale of all sorts of merchandise’, the ‘fair’ is still very much on. The traveller is here to find something different: a balm on the busy mind, to enjoy days of freedom on Goa’s magnificent beaches, to parasail or swim with the tide of fellow visitors from all around the globe, to savour its unique cuisine and imbibe its spirits, to take a long and invigorating trek in its unexplored interiors, to marvel at its majestic temples and churches, in short, to be at one with the most friendly people in the country In the sixties and seventies, it was, as we have remarked, a haven for the hippies. Since then Goa has moved on to fullfledged Statehood, its own Council of Ministers, a magnificent new Assembly complex, its citizens among the most literate in the country with a per capita income the highest in the land. At the hub of this prosperity, is the Tourism industry. At the Goa Tourism Development Corporation (GTDC), we take a humble bow in acknowledgement, in some small measure, of putting Goa on the tourist map of our country",
    "Jammu & Kashmir is a newly created Union Territory in India consisting of two divisions: Jammu Division & Kashmir Division, both of which are administered by the Central Government of India. It is located to the north of Himachal Pradesh & Punjab and to the west of Ladakh. Jammu is known as the City of Temples & offers plentiful sightseeing opportunities with its gardens, palaces, forts & religious attractions, the most famous of which is Mata Vaishno Devi in Katra. Kashmir Valley is famous for its meadows, lakes, high altitude passes, hill stations, Mughal Gardens, Dal Lake, Shikara Ride & ancient religious sites.",
    "Uttarakhand the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with large areas under snow cover and steep slopes. Uttarakhand State comprises of 02 regions 13 districts, 78 Tehsils and 95 community development blocks. The districts lying in Garhwal Region are Uttarkashi, Chamoli, Pauri, Rudraprayag, Tehri, Dehradun & Haridwar and the remaining 06 in Kumaon Region are Udham Singh Nagar, Nainital, Almora, Pithoragarh, Champawat & Bageshwar. The human population of the State is 1.01 Crore (2001) compared to 25.18 lacs in 1951 and that of livestock is 50.22 lacs in 2012 as compared to 41.68 lacs (1993).Uttarkashi, Chamoli and Pithoragarh districts of Uttarakhand share International boundary in the NW with China. In the east, the districts of Pithoragarh, Champawat and Udham Singh Nagar also share International boundary with Nepal. Uttarkashi and Dehradun share inter-state boundaries with Himachal Pradesh in the north-west, while Dehradun, Haridwar, part of Nainital and Udham Singh Nagar touches the boundary of Uttar Pradesh in the south. The Garhwal Himalayas along with Kumaon and a part of Himachal Pradesh has unique characteristics as it has Tibet in the north, Upper Gangetic Plain in the south and Eastern Himalayan provinces in the east. Physiographically, Uttarakhand represents a cross-section of the Himalaya on the basis of its evolutionary history, namely the Trans-Himalaya, Greater Himalaya or Himadri, Lesser Himalaya, Shiwalik Ranges, foothills & Terai and the Plains of Dehradun, Haridwar and Udham Singh Nagar.The floral & faunal composition is diverse and interesting. Between the Himalaya in the north and the hills and the plateau in the south lies a vast Gangetic Plains which is one of the largest homogenous alluvial plains in the world. In Uttarakhand, the Bhabar skirts the Shiwaliks mainly in Garhwal and Nainital- Pilibhit while the Terai extends from River Yamuna on the west and a large portion of it lies in the Nepal. The Terai in Uttarakhand covers lower portion of district Nainital.Major portion of the state is mountainous and these mountains (Himalayas) are one of the youngest mountain systems of the world (40 million years in age compared to peninsular mountains of 1500-2500 million years old) and hence ecologically very fragile and relatively much more susceptible to earthquakes and landslides. Shiwalik formations are one of the most important eco-region due to their endemicity and past geological history. The era of Shiwalik ecosystem of rocks is called “Age of Mammals”. It is the filtering zone for migration of fauna and flora from highlands to lowlands and vice-versa. It is not only a gateway to the enhanced biodiversity but also to the green and white revolutions, industrialization and creation of livelihood opportunities. This region harbored a rich fauna in the geological past as evidenced by the discovery of fossils of Amphibians, Reptiles and Mammals. The wide altitudinal range is the richest zone in terms of habitat and biodiversity.Uttarakhand has everything except the sea. India, Indonesia, and the Indian Ocean cover the area once occupied by the Tethys ocean, and Turkey, Iraq, and Tibet sit on Cimmeria. What was once the Tethys Sea has become the Mediterranean sea. But discovery of the Ammonite fossils in the upper reaches of Himalayas, in Nanda Devi are suggestive of the fact that area was perhaps submerged under Tethys Sea in the geological past.  Hence, the occurrence of the marine biodiversity in the fossil form is also contributing to the richness of the faunal diversity in Uttarakhand. The state is represented by biographic zone 2B Western Himalaya and 7B Shiwaliks consisting of Kumaon and Garhwal regions. Total geographical area of the state (53,483 sq.km) is 1.6 % of the total geographical area of the Country, out of which 46,035 sq.km is hilly. The major wealth of the state is its forests with very rich biodiversity. The state ranks sixth among the other states in terms of percentage of recorded forest area. The state has thus varied terrain, major portion of which is mountainous with unique ecological diversity consisting of high alpine areas to the Sub-tropical and Tropical regions. Total Forest cover area in the state is 3.47 million ha constituting 71% of the State’s Geographical area. The forest diversity of the state comprises of Tropical Moist Forest (500-1000m) which is Terai and Bhabar belt of Sub Himalayan Tract, Sub-Tropical Pine Forest (1000-2000m), Himalayan Moist Temperate Forest (2000-3000m), Sub-Alpine Forests (3400-4000m) and Alpine Forests  4000-5000m). Physiographically, the state can be divided into three zones namely, the Himalaya, The Shiwalik and the Tarai Region. The state has a temperate climate except in plain areas where the climate is tropical. The average annual rainfall is 1550 mm.Enormous floristic and vegetation diversity marks the upper limit of vegetation, with variety of orchids, horticulture and economic plants, including Bamboo, wild germplasm of some cultivated species. By virtue of its extensive geographical stretch, varied terrain and climate the Himalayan Mountain Ranges in Uttarakhand are bestowed with a series of wetlands. Important perennial rivers are Ganga, Yamuna, Bhagirathi, Alaknanda, Ramganga, Nayar, Kosi, Saryu, Sharda and their tributaries. These wetlands, which are some of the most productive and endangered ecosystems, exhibit tremendous faunal diversity from Protozoa to Mammalia. They are roosting & breeding grounds and shelters for migratory and resident birds during various times of the year. With abounding diversity on all accounts, the biodiversity of the State is bound to be rich. After the creation of Uttarakhand, as many as 3748 faunal species were inventoried and documented which included 451 species and sub-species, two new Taxa, 22 constitute a first record for India. Ten species occurring in the state are endemic to India. The faunal species included 1060 species of vertebrates, 2020 species of Insecta Invertebrates and  4346 invertibrates excluding Insecta.The present state of the Uttarakhand conforms to its rich heritage status supported by a rich floral diversity, vegetation, forest cover, healthy and pristine ecosystem and tremendous conservation efforts from species level to genetic level and to ecosystem level. Due to its unique bio-diversity, the state is also home to several rare and endangered species of herbal and aromatic plants. Realizing the immense potential of this resource in the state, the state government has declared Uttarakhand as a Herbal State.",
    "Himachal Pradesh is hill state, located in northern part of India and situated in the Western Himalayas. It’s bordered by union territories of Jammu Kashmir and Ladakh in the north side and other states of India like Punjab in the west, Uttarakhand in the south east, Haryana in the south west and the international border of Tibet in the east.Himachal Pradesh is a mountainous state and most of the region lies on the foothills of the Dhauladhar Mountain Range. Reo Purgyil is the highest mountain peak in the Himachal Pradesh, located at height of 6,816 meters above from the sea level. Himachal Pradesh is spread across valleys with many perennial rivers flowing through them.",
  ];
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const ReviewsCompo = () => {
    return (
      <>
        <p className="mt-5 mb-5">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum.
        </p>

        <div className="review_sect d-flex justify-content-center align-items-center flex-column mt-3">
          <img src={jamesDoe} alt="" />
          <div>
            <span>
              <img src={ratingStar} alt="" />
            </span>
          </div>
          <span className="rating"></span>
        </div>
      </>
    );
  };
  return (
    <div>
      <Articles />
      <ChooseTour />
      <div>
        <div className="container container-wrap-desti">
          <div className="exotic_text my-4">
            <h1 className="text-center">Go Exotic Places</h1>
            <p className="text-center my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero
              odio porro quod quis beatae delectus provident eum, possimus
              voluptatibus maxime incidunt voluptas rerum sunt asperiores eaque
              nihil iste officia?
            </p>
          </div>
          <DialogButton
            setVisible={setVisible}
            visible={visible}
            image={"image"}
            content={"content"}
            currentExotic={currentExotic}
            setcurrentExotic={setcurrentExotic}
          />
          {/* <div className="wrapper-exotic-place">
            <div className="allimage_wrapper d-flex justify-content-around">
              <div className="one_image">
                <div className="image_Goa">
                  <img src={Goa1} className="exotic_image_render" alt="" />
                  <div className="text text-white text_overIMage">
                    <p className="new_exotic">new</p>
                    <div className="places_exotic">Goa</div>
                  </div>
                  <div className="Two_imagePair d-flex justify-content-around">
                    <div className="image_kashmir">
                      <img
                        src={kashmir}
                        className="exotic_image_render"
                        width="350px"
                        alt=""
                      />
                      <div className="text text-white text_overIMage">
                        <p className="new_exotic">new</p>
                        <div className="places_exotic">Kashmir</div>
                      </div>
                    </div>
                    <div className="image_kashmir">
                      <img
                        src={uttarakhand}
                        className="exotic_image_render"
                        width="350px"
                        alt=""
                      />
                      <div className="text text-white text_overIMage">
                        <p className="new_exotic">new</p>
                        <div className="places_exotic">Uttarakhand</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="two_image">
                <img src={Himachal} className="exotic_image_render" alt="" />
                <div className="text text-white text_overIMage">
                  <p className="new_exotic">new</p>
                  <div className="places_exotic">Himachal</div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div
              className="col-lg-8 row  col-sm-12 col-md-12 exoticPlace_cards"
              style={{ marginRight: "7px" }}
            >
              <div
                className="col-lg-12 go_exotic_goa"
                style={{ marginBottom: "27px" }}
              >
                <div
                  className="image_horizontal go_exotic"
                  onClick={() => {
                    getexotic("goa", contentOftheExotic[0], Goa1);
                  }}
                >
                  <img src={Goa1} alt="" />
                  <div className="text text-white">
                    <p className="new_exotic">new</p>
                    <div className="places_exotic">Goa</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div
                  className="image_horizontal go_exotic"
                  onClick={() => {
                    getexotic("kashmir", contentOftheExotic[1], kashmir);
                  }}
                >
                  <img src={kashmir} alt="" />

                  <div className="text text-white">
                    <p className="new_exotic">new</p>
                    <div className="places_exotic">Kashmir</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div
                  className="image_horizontal go_exotic"
                  onClick={() => {
                    getexotic(
                      "uttarakhand",
                      contentOftheExotic[2],
                      uttarakhand
                    );
                  }}
                >
                  <img src={uttarakhand} alt="" />
                  <div className="text text-white">
                    <p className="new_exotic">new</p>
                    <div className="places_exotic">Uttarakhand</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div
                className="image_horizontal go_exotic lastImage_reponsive"
                onClick={() => {
                  getexotic("himachal", contentOftheExotic[3], Himachal);
                }}
              >
                <img src={Himachal} alt="" />

                <div className="text text-white">
                  <p className="new_exotic">new</p>
                  <div className="places_exotic">Himachal</div>
                </div>
              </div>
            </div>
          </div> */}
          <div class="container kashmir---">
            <div class="row">
              <div class="col-md-8">
                <div
                  class="card mb-4"
                  onClick={() => {
                    getexotic("goa", contentOftheExotic[0], Goa1);
                  }}
                >
                  <img src={Goa1} alt="Image" class="card-img" />
                  <div class="bottom-left-text">
                    {/* <p className="new_exotic">New</p> */}
                    <div className="places_exotic">Goa</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="card mb-3"
                      onClick={() => {
                        getexotic("kashmir", contentOftheExotic[1], kashmir);
                      }}
                    >
                      <img src={kashmir} alt="Image" class="card-img" />
                      <div class="bottom-left-text">
                        {/* <p className="new_exotic">New</p> */}
                        <div className="places_exotic">Kashmir</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="card mb-3"
                      onClick={() => {
                        getexotic(
                          "uttarakhand",
                          contentOftheExotic[2],
                          uttarakhand
                        );
                      }}
                    >
                      <img src={uttarakhand} alt="Image" class="card-img" />
                      <div class="bottom-left-text">
                        {/* <p className="new_exotic">New</p> */}
                        <div className="places_exotic">Uttarakhand</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="card mb-3 custom-card"
                  onClick={() => {
                    getexotic("himachal", contentOftheExotic[3], Himachal);
                  }}
                >
                  <img src={Himachal} alt="Image" class="card-img" />
                  <div class="bottom-left-text">
                    {/* <p className="new_exotic">New</p> */}
                    <div className="places_exotic">Himachal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/destination">
            <button className="seeMore">SEE MORE</button>
          </Link>
        </div>
      </div>

      <div className="contact_form_container">
        <div className="contactForm">
          <div className="row" style={{ margin: "0px" }}>
            <div className="col-lg-6" style={{ margin: "0px", padding: "0px" }}>
              <img className="revie_image" src={revieImage} alt="" />
              {/* <div className="image-background2">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                      <h1 className="display-2">Choose Tour</h1>
                      <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div
              className="col-lg-6 bg-dark text-white d-flex justify-content-center flex-column align-items-center"
              style={{ marginLeft: "0px", marginRight: "0px", padding: "0px" }}
            >
              <div className="content_reviews">
                <h3>Our Top Reviews</h3>

                {/* <div className="card"> */}
                <Carousel
                  value={products}
                  numVisible={1}
                  numScroll={1}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={ReviewsCompo}
                  autoplayInterval={3000}
                />
                {/* </div> */}
                {/* <p className="mt-5 mb-5">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum.
                </p>

                <div className="review_sect d-flex justify-content-center align-items-center flex-column mt-3">
                  <img src={jamesDoe} alt="" />
                  <div>
                    <span>
                      <img src={ratingStar} alt="" />
                    </span>
                  </div>
                  <span className="rating"></span>
                </div> */}
                {/* <section className="contact-us" id="contact-section">
                <form id="contact" action="" method="post">
                  <div className="section-heading">
                    <h4>Contact us</h4>
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

                  <div className="inputField btn">
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-gradient-button button_contact"
                      disabled
                      style={{ backgroundColor: "#EA2126", color: "white" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog_list_home mb-5" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="blog_posts_title">Tour Itinerary</h2>
            <p style={{ marginTop: "1.5rem" }} className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          {UPdatedBlogDatasorted.length > 0 ? (
            <div className="col-lg-12 row blogmapped">
              {UPdatedBlogDatasorted?.map((data, key) => {
                if (key < 6) {
                  return (
                    <div
                      className="col-lg-4 home_blogs_section"
                      key={key}
                      style={{ marginBottom: "50px" }}
                    >
                      <Link
                        to={`/blog_list/${data?.attributes?.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={`${data?.attributes?.featuredimage?.data[0]?.attributes?.url}`}
                          alt=""
                        />
                        <h3 className="mt-4 text-dark blog_title_home">
                          {data.attributes.blogtitle}
                        </h3>
                        <div className="date_home_blog d-flex align-items-center mt-3">
                          <img src={dateIcon} alt="" />
                          <span
                            style={{
                              marginLeft: "1rem",
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            {dataFormat(data?.attributes?.updatedAt)}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            <div className="text-center">
              <ProgressSpinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
