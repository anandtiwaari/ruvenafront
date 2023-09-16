import React from "react";
import { CommonHeader } from "./components/CommonHeader";
import { Articles } from "./components/Articles";
import { ChooseTour } from "./components/ChooseTour";
import { ContactForm } from "./components/ContactForm";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { DestinationList } from "./components/DestinationList";
import { Routes, Route } from "react-router-dom";
import forest1 from "./assets/Forest_adventure.png";
import forest2 from "./assets/Forest_adventure2.png";
import forest3 from "./assets/Forest_adventure3.png";
import forest4 from "./assets/Forest_adventure4.png";
import { HomeContent } from "./components/HomeContent";
import { Tours_list } from "./components/Tours_list";
import { Blogs } from "./components/Blogs";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { AboutUs } from "./components/AboutUs";
// import { PrimeReactProvider } from "primereact/context";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export const App = () => {
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-50px";
  //   }
  // }
  return (
    <React.Fragment>
      <PrimeReactProvider>
        <CommonHeader />
        {/* <Tours_list /> */}
        <Routes>
          {/* <NavigationBar /> */}
          {/* <DestinationList /> */}

          <Route path="/" element={<HomeContent />} />
          <Route path="/destination" element={<DestinationList />} />
          <Route path="/tour_list" element={<Tours_list />} />
          <Route path="/blog_list/" element={<Blogs />} />
          <Route path="/blog_list/:id" element={<Blogs />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
        <ContactForm />
        <Footer />
      </PrimeReactProvider>
    </React.Fragment>
  );
};
