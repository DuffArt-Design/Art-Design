import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Splash from './Splash';
import PenInk from './PenInk';
import Photos from './Photos';
import Digital from './Digital';
import About from './About';

export default function Main() {
  return (
<>
      <Routes>
        <Route
          path={'/'}
          element={<Splash />}
        />
        <Route
          path={'/digital'}
          element={<Digital />}
        />
        <Route
          path={'/pen_ink'}
          element={<PenInk />}
        />
        <Route
          path={'/photos'}
          element={<Photos />}
        />
        <Route
          path={'/about'}
          element={<About/>}
        />
      </Routes>
    </>
  )
}
