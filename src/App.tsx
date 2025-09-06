import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import StickyCTAs from './components/StickyCTAs';
import ConsentBanner from './components/ConsentBanner';
import BookingWidget from './components/BookingWidget';
import PaymentConfirmation from './components/PaymentConfirmation';
import Dashboard from './components/Dashboard/Dashboard'; 

// Import all pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import DashboardPage from './pages/DashboardPage'; 
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import ComplaintsPage from './pages/ComplaintsPage';
import SecurityPage from './pages/SecurityPage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import BookingCancelledPage from './pages/BookingCancelledPage';
import CustomSetupsPage from './pages/CustomSetupsPage';
import SuccessPage from './components/SuccessPage';

import { initGA, trackPageView, trackBookingStart } from './lib/analytics';

function App() {
  const [showBooking, setShowBooking] = useState(false);
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState<any>(null);

  useEffect(() => {
    // Check for existing consent
    const consent = localStorage.getItem('ga-consent');
    if (consent === 'accepted') {
      setHasConsent(true);
      initializeGA();
    } else if (consent === 'declined') {
      setHasConsent(false);
    }
  }, []);

  const initializeGA = () => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      initGA(measurementId);
      trackPageView(window.location.pathname);
    }
  };

  const handleConsentAccept = () => {
    setHasConsent(true);
    initializeGA();
  };

  const handleConsentDecline = () => {
    setHasConsent(false);
  };

  const handleBookNow = () => {
    setShowBooking(true);
    if (hasConsent) {
      trackBookingStart();
    }
  };

  const handleBookingConfirmed = (bookingData: any) => {
    setShowBooking(false);
    setBookingConfirmed(true);
    setConfirmationData(bookingData);
  };

  const handleBackToHome = () => {
    setBookingConfirmed(false);
    setConfirmationData(null);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        {bookingConfirmed && confirmationData ? (
          <PaymentConfirmation
            bookingReference={confirmationData.bookingReference}
            bookingData={confirmationData.bookingData}
            amount={confirmationData.amount}
            paymentMethod={confirmationData.paymentMethod}
            onBackToHome={handleBackToHome}
          />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage onBookNow={handleBookNow} hasAnalyticsConsent={hasConsent} />} />
                <Route path="/services" element={<ServicesPage onBookNow={handleBookNow} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
                <Route path="/complaints" element={<ComplaintsPage />} />
                <Route path="/security" element={<SecurityPage onBookNow={handleBookNow} />} />
                <Route path="/custom-setups" element={<CustomSetupsPage onBookNow={handleBookNow} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/booking-success" element={<BookingSuccessPage />} />
                <Route path="/booking-cancelled" element={<BookingCancelledPage />} />
                <Route path="/success" element={<SuccessPage />} />
              </Routes>
            </main>
            <Footer />
            <StickyCTAs onBookNow={handleBookNow} hasAnalyticsConsent={hasConsent} />
            
            {showBooking && (
              <BookingWidget 
                isOpen={showBooking}
                onClose={() => setShowBooking(false)}
                onBookingConfirmed={handleBookingConfirmed}
                hasAnalyticsConsent={hasConsent}
              />
            )}
          </>
        )}
        
        {hasConsent === null && (
          <ConsentBanner
            onAccept={handleConsentAccept}
            onDecline={handleConsentDecline}
          />
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;