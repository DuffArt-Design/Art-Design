import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';


import Splash from './Splash';
import PenInk from './PenInk';
import Photos from './Photos';
import Digital from './Digital';
import About from './About';
import Upload from './Upload';
import Secret from './Secret';
import { AnimatePresence } from 'framer-motion';

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
      <Routes key={location.key} location={location}>
          <Route path="/" element={<Splash />} />
          <Route path="/digital" element={<Digital loggedIn={loggedIn} />} />
          <Route path="/pen_ink" element={<PenInk loggedIn={loggedIn} />} />
          <Route path="/photos" element={<Photos loggedIn={loggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/secret"
            element={<Secret onLogin={(loggedIn) => setLoggedIn(loggedIn)} />}
          />
          <Route
            path="/upload"
            element={
              loggedIn ? (
                <Upload />
              ) : (
                <Navigate to="/secret" />
              )
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
