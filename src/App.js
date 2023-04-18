import { useEffect, useState } from "react";
import Main from "./Components/Main";
import HeaderComponent from "./Components/Header";
import { AnimatePresence, motion } from 'framer-motion';
import { Image } from '@mantine/core';

const App = () => {
  const [open, setOpen] = useState(true);

  const isMobile = window.matchMedia('(max-width: 924px)').matches;

  let imageSize;

  if (isMobile) {
    imageSize = 300;
  } else {
    imageSize = 180;
  }

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  }, [])

  return (
    <>
      {!open ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="main-motion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.75 } }}
          >
            <body className="background">
              <HeaderComponent />
              <Main />
            </body>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="icon-motion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.75 } }}
            exit={{ opacity: 0, transition: { duration: 0.75 } }}
          >
            <div className="title">
              <Image
                src="https://res.cloudinary.com/dyatwpbwb/image/upload/v1677707487/assets/Logo_with_Tree_Background_Bigger_gsh5oy.png"
                height={imageSize}
                width={imageSize}
                alt='Duff Logo'
              />
              <h1 className="title__name" >Duff Art & Design</h1>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
