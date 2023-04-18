import { Image, Indicator, Modal, Text, Group } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { motion, AnimatePresence } from 'framer-motion';

export default function Digital({ loggedIn }) {
  const [photos, setPhotos] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleDelete = (photo) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${photo._id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch(process.env.REACT_APP_SERVER_URL)
          .then(res => res.json())
          .then(data => {
            const filteredData = data.filter(photo => photo.id.startsWith("digital"));
            setPhotos(filteredData);
            setLoading(false);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };


  const MAX_RETRIES = 5;
  const RETRY_DELAY = 3000;

  const fetchPhotos = async (retryCount = 0) => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL, { timeout: 10000 });
      const data = await response.json();
      const filteredData = data.filter(photo => photo.id.startsWith("digital"));
      setPhotos(filteredData);
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
  }, []);

  return (
    <>
      {error && (
        <p>Error Loading Images</p>
      )}
           <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="photo-loading"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.75 } }}
        >
          <div className={`loading_container`}>
            <Group position="center">
              <h1 className='loading'>Loading Images</h1>
              <div class={`icon-container`}>
                <BarLoader
                  color='white'
                  height={10}
                  width={1500}
                />
              </div>
            </Group>
          </div>
        </motion.div>
      )}
      <Modal
        size="85%"
        overlayColor='black'
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        {selectedPic && (
          <>
            <Image
              height={710}
              fit="contain"
              src={selectedPic.url}
              alt={selectedPic._id}
            />
            <div style={{ textAlign: 'center' }}>
              <Text c="white" fz="lg" fw={700}>{selectedPic.name}</Text>
              <Text c="white" fs="italic">{selectedPic.description}</Text>
              {selectedPic.text && (
                <Text c="dimmed">From the Artist: "{selectedPic.text}"</Text>
              )
              }
            </div>
          </>
        )}
      </Modal>
      {!loading && (
        <motion.div
          key="photo-motion"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.75 } }}
        >
          <div className={`big-container`}>
            <div className="images-container">
              {photos.filter((item, index) => index % 3 === 0).map(photo => (
                <div key={photo._id}>
                  <Image
                    onClick={() => {
                      setSelectedPic(photo);
                      setOpened(true);
                    }}
                    src={photo.url}
                    alt={photo._id}
                    className='image image-fade-in'
                  />
                  {loggedIn && (
                    <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                  )}
                </div>
              ))}
            </div>
            <div className="images-container">
              {photos.filter((item, index) => index % 3 === 1).map(photo => (
                <div key={photo._id}>
                  <Image
                    onClick={() => {
                      setSelectedPic(photo);
                      setOpened(true);
                    }}
                    src={photo.url}
                    alt={photo._id}
                    className='image image-fade-in'
                  />
                  {loggedIn && (
                    <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                  )}
                </div>
              ))}
            </div>
            <div className="images-container">
              {photos.filter((item, index) => index % 3 === 2).map(photo => (
                <div key={photo._id}>
                  <Image
                    onClick={() => {
                      setSelectedPic(photo);
                      setOpened(true);
                    }}
                    src={photo.url}
                    alt={photo._id}
                    className='image image-fade-in'
                  />
                  {loggedIn && (
                    <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );

}
