import { Image } from '@mantine/core';
import { motion } from 'framer-motion';

export default function About() {

  // Image Link goes in src put inside "" delete brackets

  return (
    <>
      <motion.div
        key="about-motion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        exit={{ opacity: 0, transition: { duration: 0.75 } }}
      >
        <div className='about_container'>
          <div className='about_image'>
            <Image
              height={500}
              src="https://res.cloudinary.com/dyatwpbwb/image/upload/v1678237300/assets/About_Me_Photo_kbbe8k.jpg"
              alt="profile image"
              radius="md"
            />
          </div>
          <div className='about'>
            <p className='text'>
              Growing up, I spent a lot of time exploring my small Michigan town, and the surrounding beaches and forests. I grew to be fascinated with snakes and other animals, and would try and draw the pictures I would see in different books. In High School, my interests drifted towards Sci-Fi/Fantasy games and movies. It’s also when I started to push my art abilities, and fell in love with using black and white. Eventually, I moved to Chicago, which is where I live today. As far as my art goes, I want to keep pushing my skills with pen and Ink, while branching out into some digital stuff as well. Regardless, thanks for checking out my stuff!
            </p>
            <p className='text-email'>If anyone would like to reach out with any questions, please contact me at <a href="mailto:mcduffartanddesign@gmail.com">mcduffartanddesign@gmail.com</a></p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
