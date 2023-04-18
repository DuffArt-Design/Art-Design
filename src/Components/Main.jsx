import React, { useState, useEffect } from 'react';
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
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const location = useLocation();

  const MAX_RETRIES = 5;
  const RETRY_DELAY = 3000;

  const fetchPhotos = async (retryCount = 0) => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL, { timeout: 10000 });
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => {
          fetchPhotos(retryCount + 1);
        }, RETRY_DELAY);
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos]);

  return (
    <>
      <AnimatePresence mode="wait">
      <Routes key={location.key} location={location}>
          <Route path="/" element={<Splash />} />
          <Route path="/digital" element={<Digital
           loggedIn={loggedIn}
           photos={photos}
           loading={loading}
           error={error}
           setPhotos={setPhotos}
            />} />
          <Route path="/pen_ink" element={<PenInk
           loggedIn={loggedIn}
           photos={photos}
           loading={loading}
           error={error}
           setPhotos={setPhotos}
           />} />
          <Route path="/photos" element={<Photos
          loggedIn={loggedIn}
          photos={photos}
          loading={loading}
          error={error}
          setPhotos={setPhotos}
           />} />
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
