import { useEffect } from 'react';
import { Image } from '@mantine/core';

export default function Splash() {
  const isMobile = window.matchMedia('(max-width: 924px)').matches;

  useEffect(() => {
    const spinUpBackend = async () => {
      await fetch(process.env.REACT_APP_SPIN);
    };
    spinUpBackend();
  }, []);

//   first src is for mobile homepage image
//   second src is for desktop homepage image

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
