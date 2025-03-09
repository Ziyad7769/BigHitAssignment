import React from "react";
import Header from "../components/Header"; // Navbar
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import video from "../assets/heroVideo.mp4";
import Footer from "../components/Footer";
import MedicalInsights from "../components/MedicalInsight";
import LifestyleTips from "../components/LifeStyleTips";
import CommunitySupport from "../components/CommunitySupport";

const Home = () => {
  return (
    <div className="home-container">
      {/* Section with Background Video */}
      <div className="video-section">
        <video autoPlay loop muted className="background-video opacity-60" preload="none">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content pt-12">
          <Header /> {/* Navbar / Header */}
          <Hero />
        </div>
      </div>

      {/* Other Components (No Video Background) */}
      <div className="other-content mt-20">
        <HowItWorks />
        <MedicalInsights />
        <LifestyleTips />
        <CommunitySupport />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
