import React from 'react';

// Sections
import {
  BenefactorSection,
  SubscribeSection,
  HelpUsOutSection,
  ContactSection,
  LandingSection,
  TrackSection,
  AboutSection,
  // TeamSection,
} from '../sections';
import EssentialsSection from '../components/essentialsSection/EssentialsSection';
import Navbar from '../components/layout/navbar/Navbar';
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu';

const MainPage = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <LandingSection />
      <AboutSection />
      <TrackSection />
      <HelpUsOutSection />
      <BenefactorSection />
      <ContactSection />
      <EssentialsSection />
      <SubscribeSection />
    </>
  );
};

export default MainPage;