import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import CoastalClassic from './pages/CoastalClassic';
import KwekweGolfDay from './pages/KwekweGolfDay';
import PastEvents from './pages/PastEvents';
import PastEventDetail from './pages/PastEventDetail';
import Sponsorship from './pages/Sponsorship';
import Contact from './pages/Contact';
import RsvpSignIn from './pages/RsvpSignIn';
import Newsletter from './pages/Newsletter';
import Rules from './pages/Rules';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Defer slightly so React has painted
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollReset />
      <Navbar />

      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/coastal-classic" element={<CoastalClassic />} />
              <Route path="/kwekwe-golf-day" element={<KwekweGolfDay />} />
              <Route path="/past-events" element={<PastEvents />} />
              <Route path="/past-events/:slug" element={<PastEventDetail />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rsvp" element={<RsvpSignIn />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
      <Toaster
        position="top-center"
        theme="light"
        closeButton
        toastOptions={{
          style: {
            fontFamily: "'Inter', system-ui, sans-serif",
            borderRadius: '2px',
            border: '1px solid var(--color-gold-300)',
            color: 'var(--color-navy-900)',
          },
        }}
      />
    </>
  );
}
