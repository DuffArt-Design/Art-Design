import React from 'react';
import { Image } from '@mantine/core';

export default function Splash() {
  const isMobile = window.matchMedia('(max-width: 924px)').matches;

console.log(isMobile)

  return (
    <>
      {isMobile ? (
        <Image
          className="splash"
          src="https://res.cloudinary.com/dyatwpbwb/image/upload/v1677109395/digital/twkvqwg4wc0qxt8j4lir.jpg"
        />
      ) : (
        <Image
          className="splash"
          src="https://res.cloudinary.com/dyatwpbwb/image/upload/v1676517566/assets/negative_v7hvlg.png"
        />
      )}
    </>
  );
}
