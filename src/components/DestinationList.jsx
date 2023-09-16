import React, { useState } from "react";
import forest1 from "../assets/Forest_adventure.png";
import forest2 from "../assets/Forest_adventure2.png";
import forest3 from "../assets/Forest_adventure3.png";
import forest4 from "../assets/Forest_adventure4.png";
import Goa1 from "../assets/Goa-min 1.png";
import kashmir from "../assets/kashmir_actual.png";
import Himachal from "../assets/Himachal-min 1.png";
import uttarakhand from "../assets/uttarakhand 1.png";
import maharashtra from "../assets/Maharatra.png";
import northEast from "../assets/North-East-1.png";
import Gujarat from "../assets/Gujarat.png";
import Kerala from "../assets/Kerala.png";
import { DialogButton } from "./DialogButton";

export const DestinationList = () => {
  const [visible, setVisible] = useState(false);
  const [currentExotic, setcurrentExotic] = useState({
    payload: "",
    content: "",
    image: null,
  });
  const getexotic = (payload, content, img) => {
    return setcurrentExotic({ payload, content, img });
  };
  const contentOftheExotic = [
    "In those tumultuous and rebellious times in the sixties, it was then not the ‘sweet betel’ that was the prime attraction but a different kind of ‘weed’. But Goa, since those days of the angry generation, has moved on to attract a multitudinous, peaceful and cosmopolitan school of visitors from all around the globe. Down the corridors of time Goa has been different things to different people. To the Portuguese conquerors it was ‘Golden Goa’, the El Dorado, the ‘Rome of the East’. Such was its beauty and grandeur, that a traveller was moved to remark: ‘Whoever has seen Goa, need not visit Lisboa’-Lisbon, which was then the grand epicenter of the Portuguese dominions.While the contemporary traveller may not come to modern, thriving Goa ‘for the sale of all sorts of merchandise’, the ‘fair’ is still very much on. The traveller is here to find something different: a balm on the busy mind, to enjoy days of freedom on Goa’s magnificent beaches, to parasail or swim with the tide of fellow visitors from all around the globe, to savour its unique cuisine and imbibe its spirits, to take a long and invigorating trek in its unexplored interiors, to marvel at its majestic temples and churches, in short, to be at one with the most friendly people in the country In the sixties and seventies, it was, as we have remarked, a haven for the hippies. Since then Goa has moved on to fullfledged Statehood, its own Council of Ministers, a magnificent new Assembly complex, its citizens among the most literate in the country with a per capita income the highest in the land. At the hub of this prosperity, is the Tourism industry. At the Goa Tourism Development Corporation (GTDC), we take a humble bow in acknowledgement, in some small measure, of putting Goa on the tourist map of our country",
    "Jammu & Kashmir is a newly created Union Territory in India consisting of two divisions: Jammu Division & Kashmir Division, both of which are administered by the Central Government of India. It is located to the north of Himachal Pradesh & Punjab and to the west of Ladakh. Jammu is known as the City of Temples & offers plentiful sightseeing opportunities with its gardens, palaces, forts & religious attractions, the most famous of which is Mata Vaishno Devi in Katra. Kashmir Valley is famous for its meadows, lakes, high altitude passes, hill stations, Mughal Gardens, Dal Lake, Shikara Ride & ancient religious sites.",
    "Uttarakhand the 27th state of Republic of India lies between 28o 44' & 31o 28' N Latitude and 77o 35' & 81o 01' East longitude. It was carved out of UP on 9th November 2000. The geographical area of the state is 53483 sq. km and the terrain and topography of the state is largely hilly with large areas under snow cover and steep slopes. Uttarakhand State comprises of 02 regions 13 districts, 78 Tehsils and 95 community development blocks. The districts lying in Garhwal Region are Uttarkashi, Chamoli, Pauri, Rudraprayag, Tehri, Dehradun & Haridwar and the remaining 06 in Kumaon Region are Udham Singh Nagar, Nainital, Almora, Pithoragarh, Champawat & Bageshwar. The human population of the State is 1.01 Crore (2001) compared to 25.18 lacs in 1951 and that of livestock is 50.22 lacs in 2012 as compared to 41.68 lacs (1993).Uttarkashi, Chamoli and Pithoragarh districts of Uttarakhand share International boundary in the NW with China. In the east, the districts of Pithoragarh, Champawat and Udham Singh Nagar also share International boundary with Nepal. Uttarkashi and Dehradun share inter-state boundaries with Himachal Pradesh in the north-west, while Dehradun, Haridwar, part of Nainital and Udham Singh Nagar touches the boundary of Uttar Pradesh in the south. The Garhwal Himalayas along with Kumaon and a part of Himachal Pradesh has unique characteristics as it has Tibet in the north, Upper Gangetic Plain in the south and Eastern Himalayan provinces in the east. Physiographically, Uttarakhand represents a cross-section of the Himalaya on the basis of its evolutionary history, namely the Trans-Himalaya, Greater Himalaya or Himadri, Lesser Himalaya, Shiwalik Ranges, foothills & Terai and the Plains of Dehradun, Haridwar and Udham Singh Nagar.The floral & faunal composition is diverse and interesting. Between the Himalaya in the north and the hills and the plateau in the south lies a vast Gangetic Plains which is one of the largest homogenous alluvial plains in the world. In Uttarakhand, the Bhabar skirts the Shiwaliks mainly in Garhwal and Nainital- Pilibhit while the Terai extends from River Yamuna on the west and a large portion of it lies in the Nepal. The Terai in Uttarakhand covers lower portion of district Nainital.Major portion of the state is mountainous and these mountains (Himalayas) are one of the youngest mountain systems of the world (40 million years in age compared to peninsular mountains of 1500-2500 million years old) and hence ecologically very fragile and relatively much more susceptible to earthquakes and landslides. Shiwalik formations are one of the most important eco-region due to their endemicity and past geological history. The era of Shiwalik ecosystem of rocks is called “Age of Mammals”. It is the filtering zone for migration of fauna and flora from highlands to lowlands and vice-versa. It is not only a gateway to the enhanced biodiversity but also to the green and white revolutions, industrialization and creation of livelihood opportunities. This region harbored a rich fauna in the geological past as evidenced by the discovery of fossils of Amphibians, Reptiles and Mammals. The wide altitudinal range is the richest zone in terms of habitat and biodiversity.Uttarakhand has everything except the sea. India, Indonesia, and the Indian Ocean cover the area once occupied by the Tethys ocean, and Turkey, Iraq, and Tibet sit on Cimmeria. What was once the Tethys Sea has become the Mediterranean sea. But discovery of the Ammonite fossils in the upper reaches of Himalayas, in Nanda Devi are suggestive of the fact that area was perhaps submerged under Tethys Sea in the geological past.  Hence, the occurrence of the marine biodiversity in the fossil form is also contributing to the richness of the faunal diversity in Uttarakhand. The state is represented by biographic zone 2B Western Himalaya and 7B Shiwaliks consisting of Kumaon and Garhwal regions. Total geographical area of the state (53,483 sq.km) is 1.6 % of the total geographical area of the Country, out of which 46,035 sq.km is hilly. The major wealth of the state is its forests with very rich biodiversity. The state ranks sixth among the other states in terms of percentage of recorded forest area. The state has thus varied terrain, major portion of which is mountainous with unique ecological diversity consisting of high alpine areas to the Sub-tropical and Tropical regions. Total Forest cover area in the state is 3.47 million ha constituting 71% of the State’s Geographical area. The forest diversity of the state comprises of Tropical Moist Forest (500-1000m) which is Terai and Bhabar belt of Sub Himalayan Tract, Sub-Tropical Pine Forest (1000-2000m), Himalayan Moist Temperate Forest (2000-3000m), Sub-Alpine Forests (3400-4000m) and Alpine Forests  4000-5000m). Physiographically, the state can be divided into three zones namely, the Himalaya, The Shiwalik and the Tarai Region. The state has a temperate climate except in plain areas where the climate is tropical. The average annual rainfall is 1550 mm.Enormous floristic and vegetation diversity marks the upper limit of vegetation, with variety of orchids, horticulture and economic plants, including Bamboo, wild germplasm of some cultivated species. By virtue of its extensive geographical stretch, varied terrain and climate the Himalayan Mountain Ranges in Uttarakhand are bestowed with a series of wetlands. Important perennial rivers are Ganga, Yamuna, Bhagirathi, Alaknanda, Ramganga, Nayar, Kosi, Saryu, Sharda and their tributaries. These wetlands, which are some of the most productive and endangered ecosystems, exhibit tremendous faunal diversity from Protozoa to Mammalia. They are roosting & breeding grounds and shelters for migratory and resident birds during various times of the year. With abounding diversity on all accounts, the biodiversity of the State is bound to be rich. After the creation of Uttarakhand, as many as 3748 faunal species were inventoried and documented which included 451 species and sub-species, two new Taxa, 22 constitute a first record for India. Ten species occurring in the state are endemic to India. The faunal species included 1060 species of vertebrates, 2020 species of Insecta Invertebrates and  4346 invertibrates excluding Insecta.The present state of the Uttarakhand conforms to its rich heritage status supported by a rich floral diversity, vegetation, forest cover, healthy and pristine ecosystem and tremendous conservation efforts from species level to genetic level and to ecosystem level. Due to its unique bio-diversity, the state is also home to several rare and endangered species of herbal and aromatic plants. Realizing the immense potential of this resource in the state, the state government has declared Uttarakhand as a Herbal State.",
    "Himachal Pradesh is hill state, located in northern part of India and situated in the Western Himalayas. It’s bordered by union territories of Jammu Kashmir and Ladakh in the north side and other states of India like Punjab in the west, Uttarakhand in the south east, Haryana in the south west and the international border of Tibet in the east.Himachal Pradesh is a mountainous state and most of the region lies on the foothills of the Dhauladhar Mountain Range. Reo Purgyil is the highest mountain peak in the Himachal Pradesh, located at height of 6,816 meters above from the sea level. Himachal Pradesh is spread across valleys with many perennial rivers flowing through them.",
    "Northeast India is known for its Seven (now Eight) Sisters States- Arunachal Pradesh, Manipur, Assam, Meghalaya, Mizoram, Nagaland, Tripura and the Himalayan state of Sikkim. It is basically located in the easternmost region, connected to east India via a narrow corridor squeezed between Bangladesh and Nepal. It is probably one of the most gorgeous, wondrous and naturally beautiful regions surrounded by greenery, hills, wildlife sanctuaries and magnificent water bodies. It looks like the fascinating land of the Northeast is blessed by Mother Nature as even a tiny stream here resembles picturesque. But, after all its beauty it is the least explored region in India. It remains somewhat an unknown destination for many Indians. Even if the region manages to get a space in press, it is mostly for the wrong reasons. There are many people who do not even know the existence of certain states in the Northeast. So, let’s know some fascinating and exciting facts that made North East India famous, which are lesser-known to the rest of the Indians:Do you know where in the world you will find the world’s largest river island?Majuli was declared as the largest river island in the world. In fact, it’s in India and the more exciting thing is it is situated in Assam, Northeast. It is located in the Brahmaputra River, near Dibrugarh, Assam. It is known for its country’s first river island district, having a total area of around 880 square kms. Majuli has been the cultural capital and the birthplace of Assamese Civilization for the past 500 years. Majuli is equally famous for its 22 Satras. The Satras set up conserve antiques like utensils, weapons, jewellery, and many other items for their cultural significance.Where do you find the world’s smallest inhabited river island in Asia?Umananda Island in Assam is the smallest inhabited river islet in the midst of the mighty Brahmaputra River, flowing through the city of Guwahati. Umananda Island has a famous temple by the same name. The temple was built under the initiative of Ahom King Gadhar Singha in the year 1694. Every year, thousands of devotees come to the temple to offer prayers and seek blessings from lord Shiva as the holy place is considered very sacred. The temple is also known as ‘Bhasmachal’ (means destroyed place). The island is also named as Peacock Island by a British due to its unique shape. The Island was the home to the species of the endangered golden Langur, introduced to the island in the year 1980, with the last one dying in 2020.",
    "India`s most idyllic state, Kerala, better known as Gods Own Country, is today one of the most sought after tourist destinations in India. Secluded beaches, palm-fringed backwaters, mist-clad hill stations,lush tropical forests, cascading waterfalls, exotic wildlife, majestic monuments, fine art forms and enchanting festivals give it a distinctive charm. Apart from being a tourist destination, Kerala is home toIndias most advanced society. 100% literate, the State has Indias highest density of Science and Technology personnel,highest Physical Quality of Life Index (PQLI ),highest life expectancy and the lowest infant mortality rate. Kerala to be sure, isIndias cleanest and the most peaceful State. Tourism is Kerala`s boon industry.Strategically located at the south western tip of India, Kerala enjoys unique geographic features which have made it one of the most popular tourist destinations in Asia.As a destination, Kerala can attract the independent traveller with its unique qualities like the pristine environment, the rich and vibrant culture and the high quality of life among the local inhabitants brought about by the states investments since Independence in the fields of education, health care, institutions of democracy, social justice etc. The state is also endowed withunique natural, cultural and social resources.",
    "Aavo Padharo, words of welcome in the language of Gujarat because it is here that these words ring truly and the guest is 'God' and the people of Gujarat are gregariously friendly, inviting and will entice you to come again and again.Stretches out into the Arabian Sea, with a hint of the desert and with a coastline of 1600 kms long is Gujarat – the home state of Mahatma Gandhi, the Father of Nation. It is renowned for its beaches, temple towns and historic capitals. Wildlife sanctuaries, hill resorts and natural grandeur are gifts of Gujarat. Sculpture, handicrafts, arts, festivals also make the state rich. Gujarat is also among the most technologically advanced, housing the largest petrochemical complex in the country.Gujarat has always been a major centre for the Jains and some of its most interesting locations are the Jain Temple centres at Palitana and Girnar Hills. Besides the Jain temples, the state’s major attractions include the only habitat of the Asiatic Lions in India (Gir Forests), a desert ride at the Wild Ass Sanctuary and the beautiful Indo-Saracenic Architecture of Ahmedabad. The colourful tribal villages of Kutch make a visit unforgettable",
    "Maharashtra is one of the most industrialized states of India, it occupies the western and central parts of the country and extends over the Sahyadri mountains; a vast stretch of 720 kilometers of the Arabian sea coast providing it a beautiful backdr-> View it--> https://www.newkerala.com/states-of-india/maharashtra.php Jorwe in the Ahmadnagar district provide many evidences of ancient civilization in Maharashtra. The Chinese traveler Hiun Tsang, who visited this region in 640-641 BC, was quite appreciative of the prosperity of the region in his writings. During thi-> View it--> https://www.newkerala.com/states-of-india/maharashtra.php",
  ];
  return (
    <div>
      <div
        className="container "
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <DialogButton
          setVisible={setVisible}
          visible={visible}
          image={"image"}
          content={"content"}
          currentExotic={currentExotic}
          setcurrentExotic={setcurrentExotic}
        />
        {/* <div className="row destination_1">
          <div
            className="col-lg-8 row first_row_img"
            style={{ marginRight: "7px" }}
          >
            <div
              className="col-lg-12 go_exotic"
              style={{ marginBottom: "27px" }}
            >
              <div
                className="image_horizontal"
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
            <div className="col-lg-6 go_exotic">
              <div
                className="image_horizontal"
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
            <div className="col-lg-6 go_exotic">
              <div
                className="image_horizontal"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  getexotic("uttarakhand", contentOftheExotic[2], uttarakhand);
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
          <div className="col-lg-4 go_exotic">
            <div
              className="image_horizontal image_vertical_cover_himachal vertical_destina"
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
        {/* <div class="container-flex">
          <div class="left-column">
            <div class="cardsss">
              <div
                className="image_horizontal go_exotic goa_image_hori"
                style={{ margin: "12px" }}
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
            <div class="sub-column">
              <div class="cardsss">
                <div
                  className="image_horizontal go_exotic"
                  style={{ margin: "12px" }}
                  onClick={() => {
                    getexotic("kashmir", contentOftheExotic[1], kashmir);
                  }}
                >
                  <img src={kashmir} style={{ height: "100%" }} alt="" />

                  <div className="text text-white">
                    <p className="new_exotic">new</p>
                    <div className="places_exotic">Kashmir</div>
                  </div>
                </div>
              </div>
              <div class="cardsss">
                {" "}
                <div
                  className="image_horizontal go_exotic goa_image_hori"
                  style={{ margin: "12px" }}
                  onClick={() => {
                    getexotic(
                      "uttarakhand",
                      contentOftheExotic[2],
                      uttarakhand
                    );
                  }}
                >
                  <img src={uttarakhand} alt="" style={{ height: "100%" }} />
                  <div className="text text-white">
                    <p className="new_exotic">new</p>
                    <div className="places_exotic">Uttarakhand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-column">
            <div class="cardsss">
              {" "}
              <div
                className="image_horizontal go_exotic lastImage_reponsive"
                style={{ margin: "12px" }}
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
                  <p className="new_exotic">new</p>
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
                      <p className="new_exotic">new</p>
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
                      <p className="new_exotic">new</p>
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
                  <p className="new_exotic">new</p>
                  <div className="places_exotic">Himachal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div
                class="card mb-4"
                onClick={() => {
                  getexotic("kerala", contentOftheExotic[5], Kerala);
                }}
              >
                <img src={Kerala} alt="Image" class="card-img" />
                <div class="bottom-left-text">
                  <p className="new_exotic">new</p>
                  <div className="places_exotic">Kerala</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div
                    class="card mb-3"
                    onClick={() => {
                      getexotic("gujarat", contentOftheExotic[6], Gujarat);
                    }}
                  >
                    <img src={Gujarat} alt="Image" class="card-img" />
                    <div class="bottom-left-text">
                      <p className="new_exotic">new</p>
                      <div className="places_exotic">Gujarat</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="card mb-3"
                    onClick={() => {
                      getexotic(
                        "maharashtra",
                        contentOftheExotic[7],
                        maharashtra
                      );
                    }}
                  >
                    <img src={maharashtra} alt="Image" class="card-img" />
                    <div class="bottom-left-text">
                      <p className="new_exotic">new</p>
                      <div className="places_exotic">Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card mb-3 custom-card"
                onClick={() => {
                  getexotic("north east", contentOftheExotic[4], northEast);
                }}
              >
                <img src={northEast} alt="Image" class="card-img" />
                <div class="bottom-left-text">
                  <p className="new_exotic">new</p>
                  <div className="places_exotic">Northeast India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  s;
};
