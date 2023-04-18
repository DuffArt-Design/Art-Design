import { Image, Indicator, Modal, Text, Group } from '@mantine/core';
import React, { useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { motion } from 'framer-motion';

export default function Digital({ loggedIn, photos, setPhotos, loading, error }) {
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');

  const handleDelete = (photo) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${photo._id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch(process.env.REACT_APP_SERVER_URL)
          .then(res => res.json())
          .then(data => {
            setPhotos(data);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  const filteredData = photos.filter(photo => photo.id.startsWith("digital"));

  return (
    <>
      {error && (
        <p>Error Loading Images</p>
      )}
      {loading && (
        <motion.div
          key="digital-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, transition: { duration: 0.75 } }}
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
          key="digital-motion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, transition: { duration: 0.75 } }}
        >
          <div className={`big-container`}>
            <div className="images-container">
              {filteredData.filter((item, index) => index % 3 === 0).map(photo => (
                <div key={photo._id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      onClick={() => {
                        setSelectedPic(photo);
                        setOpened(true);
                      }}
                      src={photo.url}
                      alt={photo._id}
                      className='image'
                    />
                    {loggedIn && (
                      <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="images-container">
              {filteredData.filter((item, index) => index % 3 === 1).map(photo => (
                <div key={photo._id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      onClick={() => {
                        setSelectedPic(photo);
                        setOpened(true);
                      }}
                      src={photo.url}
                      alt={photo._id}
                      className='image'
                    />
                    {loggedIn && (
                      <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="images-container">
              {filteredData.filter((item, index) => index % 3 === 2).map(photo => (
                <div key={photo._id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      onClick={() => {
                        setSelectedPic(photo);
                        setOpened(true);
                      }}
                      src={photo.url}
                      alt={photo._id}
                      className='image'
                    />
                    {loggedIn && (
                      <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );

}
