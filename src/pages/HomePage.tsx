import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import BusinessPlans from '../components/BusinessPlans';
import Reviews from '../components/Reviews';
import Coverage from '../components/Coverage';
import TrustSection from '../components/TrustSection';
import Contact from '../components/Contact';

interface HomePageProps {
  onBookNow: () => void;
  hasAnalyticsConsent?: boolean | null;
}

const HomePage: React.FC<HomePageProps> = ({ onBookNow, hasAnalyticsConsent }) => {
  return (
    <>
      <Helmet>
        <title>ErrorFree 24/7 - Emergency IT Support London & Liverpool</title>
        <meta name="description" content="Professional 24/7 IT support across London & Liverpool. Remote diagnosis in 15 minutes, on-site within 1 hour. DBS-checked technicians, emergency call-outs, computer upgrades." />
        <meta name="keywords" content="IT support, emergency computer repair, London, Liverpool, 24/7, remote support, computer upgrades, smart home installation" />
        <meta property="og:title" content="ErrorFree 24/7 - Emergency IT Support London & Liverpool" />
        <meta property="og:description" content="Professional IT support 24/7. Remote diagnosis in 15 minutes, on-site within 1 hour. DBS-checked technicians." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://errorfree247.co.uk" />
      </Helmet>
      
      <Hero onBookNow={onBookNow} hasAnalyticsConsent={hasAnalyticsConsent} />
      <Services />
      <Pricing />
      <BusinessPlans />
      <Reviews />
      <Coverage />
      <TrustSection />
      <Contact />
    </>
  );
};

export default HomePage;