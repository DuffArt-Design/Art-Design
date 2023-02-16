import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Splash from './Splash';
import PenInk from './PenInk';
import Photos from './Photos';
import Digital from './Digital';
import About from './About';
import Upload from './Upload';
import Secret from './Secret';

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>
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
    </>
  );
}
