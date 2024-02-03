import React from "react";
import "./home.scss";
import { Footer } from "components/footer/Footer";
import { SectionFour } from "./SectionFour";
import { Services } from "./Services";
import { PencreditMilitary } from "./PencreditMilitary";
import { Hero } from "./Hero";
import { Header } from "components/header/Header";
import { HomeSideNavigation } from "components/HomeSideNavigation/HomeSideNavigation";
export const Home = () => {

  return (
    <div>
      <nav className="homeSidebar">
      <HomeSideNavigation/>
      </nav>
      <Header/>
      <main className="Main-Home__Section">
        <Hero />
        <Services />
        <SectionFour />
        <PencreditMilitary />
        <Footer />
      </main>
    </div>
  );
};
