import React, { useEffect, useState } from "react";
import blogimg from "../assets/Blog_image.png";
import img1 from "../assets/inner_blog1.png";
import img2 from "../assets/inner_blog2.png";
import img3 from "../assets/inner_blog3.png";
import axios from "axios";
import dateIcon from "../assets/data_icon.png";
import { Link, useLocation, useParams } from "react-router-dom";
export const Blogs = () => {
  const [blogsData, setblogsData] = useState([]);
  const [blogsDataagain, setblogsDataagain] = useState([]);
  const { id } = useParams();
  const location = useLocation().pathname;
  console.log(id, "paramsData");
  let newDataAgain = [];
  blogsData.forEach((d) => {
    return newDataAgain.push(d.attributes);
  });
  newDataAgain = newDataAgain.map((data) => {
    return { ...data, updatedAt: new Date(data.updatedAt) };
  });
  console.log(newDataAgain, "its a newDataAgain");

  // console.log(blogsDataagain, "blogsDattaaa");
  const fetchBlogData = () => {
    axios
      .get(`https://simple-onee.onrender.com/api/blogs?populate=*`)
      .then((data) => {
        console.log(data.data.data, "konsa");
        setblogsData(data.data.data);
      });
  };
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

  useEffect(() => {
    fetchBlogData();
  }, []);
  let filteredObject = blogsData.filter((data, key) => {
    return data.id == id;
  });
  console.log(filteredObject, "filteredObject");
  blogsData.map((data, key) => {
    return console.log(
      data.attributes.featuredimage.data[0].attributes.url,
      "show data"
    );
  });

  let UPdatedBlogData = [];
  blogsData.forEach((d) => {
    return UPdatedBlogData.push({ ...d.attributes, id: d.id });
  });
  console.log(UPdatedBlogData, "before___");
  UPdatedBlogData = UPdatedBlogData.map((d) => {
    return { ...d, updatedAt: new Date(d.updatedAt) };
  });
  console.log(UPdatedBlogData, "uiyuiyuiy---before");
  UPdatedBlogData?.sort((a, b) => b.updatedAt - a.updatedAt);
  console.log(UPdatedBlogData, "UPdatedBlogData");
  // console.log(homeBlogData, "homeBlogData");
  // let UPdatedBlogDatasorted = [];
  // homeBlogData.forEach((d, k) => {
  //   return UPdatedBlogDatasorted.push({
  //     id: d.id,
  //     attributes: UPdatedBlogData[k],
  //   });
  // });
  // console.log(UPdatedBlogDatasorted, "UPdatedBlogDatasorted");

  return (
    <div className="blog_main_container">
      <div className="container">
        <div className="row">
          {filteredObject.map((data, key) => {
            return (
              <React.Fragment>
                <div className="col-lg-12">
                  <img
                    style={{ width: "100%" }}
                    src={`${data?.attributes?.featuredimage?.data[0]?.attributes?.url}`}
                    alt=""
                  />
                </div>
                <div className="col-lg-12">
                  <h2 className="mt-4 blog_title_home">
                    {data.attributes.blogtitle}
                  </h2>
                  <p className="mt-4">{data.attributes.blogcontent}</p>
                  <h3 className="mt-4" style={{ marginBottom: "4rem" }}>
                    {data?.attributes?.subtitle}
                  </h3>
                  <h3 className="mt-4">{data.attributes.subtitleOne}</h3>
                  <p>{data?.attributes?.onedescription}</p>
                  <h3 className="mt-4">{data.attributes.subtitleTwo}</h3>
                  <p>{data?.attributes?.subtitletwodescripotion}</p>
                  <h3 className="mt-4">{data.attributes.subtitleThree}</h3>
                  <p>{data?.attributes?.subtitlethreeDescription}</p>
                  <h3 className="mt-4">{data.attributes.subtitlleFour}</h3>
                  <p>{data?.attributes?.subtitle4Desc}</p>
                  <h3 className="mt-4">{data.attributes.subtitleFive}</h3>
                  <p>{data?.attributes?.subtitle5Desc}</p>
                  <h3 className="mt-4">{data.attributes.subtitlesix}</h3>
                  <p>{data?.attributes?.subtitle6Desc}</p>
                  <h3 className="mt-4">{data.attributes.subtitleSeven}</h3>
                  <p>{data?.attributes?.subtitlle7Desc}</p>
                  <h3 className="mt-4">{data.attributes.subtitle8}</h3>
                  <p>{data?.attributes?.subtitle8Desc}</p>
                  <h3 className="mt-4">{data.attributes.subtitle9}</h3>
                  <p>{data?.attributes?.subtitle9Desc}</p>
                  <h3 className="mt-4">{data.attributes.subtitleTen}</h3>
                  <p>{data?.attributes?.subtitle10Desc}</p>
                </div>
                <div
                  className="col-lg-12 row inner_image_wrapper"
                  style={{ marginBottom: "4rem" }}
                >
                  {data?.attributes?.innerImages?.data?.map((data, k) => {
                    return (
                      <div className="col-lg-4 blog_inner_image_container">
                        <img
                          src={`${data.attributes.url}`}
                          className="blog_inner_image"
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        {filteredObject?.length == 0 ? (
          <div className="col-lg-12 row" style={{ marginBottom: "100px" }}>
            {UPdatedBlogData?.map((data, key) => {
              if (key < 6) {
                return (
                  <div
                    className="col-lg-4 home_blogs_section"
                    key={key}
                    style={{ marginBottom: "50px" }}
                  >
                    <Link
                      to={`/blog_list/${data?.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={`${data?.featuredimage?.data[0]?.attributes?.url}`}
                        alt=""
                      />
                      <h3 className="mt-4 text-dark blog_title_home">
                        {data?.blogtitle}
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
                          {dataFormat(data?.updatedAt)}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
