import React from 'react'
import Navbar from './Navbar.jsx';
import HeroText from "./Herotext.jsx";
import DashboardCard from "./DashboardCard.jsx";

import KeyFeatures from './KeyFeatures.jsx';
import Leaderboard from './Leaderboard.jsx';
import FAQ from './Faq.jsx';
import Footer from './Footer.jsx';
import Stakeholders from './Stakeholders.jsx';


const Landing = () => {
  return (
    <div 
      className="
        min-h-screen
      " 
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="
        w-full 
        min-h-screen
        bg-[url(./assets/HeroBg.png)] bg-cover bg-no-repeat
      ">
   
        <Navbar/>
        <div className="
          w-[95%] max-w-[1100px] mx-auto relative z-10 px-4 flex flex-col items-center justify-center
          h-[80vh]
          gap-5
          sm:w-[90%] sm:px-0
          md:items-center-safe md:justify-between md:h-[85vh] md:gap-10
          lg:flex-row
          xl:max-w-[1400px]
          2xl:max-w-[1600px]
        ">
          <HeroText/>
          <DashboardCard/>
        </div>
      </div>
      <KeyFeatures/>
      <Leaderboard/>
      <Stakeholders/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Landing