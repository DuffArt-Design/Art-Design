import { Image, Indicator, Modal, Text, Group } from '@mantine/core';
import React, { useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { motion } from 'framer-motion';

export default function Photos({ loggedIn, photos, setPhotos, loading, error }) {
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
            console.log('data:', data); // log the response from the server
            setPhotos(data);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  const filteredData = photos.filter(photo => photo.id.startsWith("photos"));

  return (
    <>
        {error && (
          <p>Error Loading Images</p>
        )}
        {loading && (
          <motion.div
            key="photos-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
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
        exit={{ opacity: 0, x: -100, transition: { duration: 0.75 } }}
      >
            <div className={`big-container`}>
              <div className="images-container">
                {filteredData.filter((item, index) => index % 3 === 0).map(photo => (
                  <div key={photo._id}>
                    <Image
                      onClick={() => {
                        setSelectedPic(photo);
                        setOpened(true);
                      }}
                      className='image'
                      src={photo.url}
                      alt={photo._id}
                    />
                    {loggedIn && (
                      <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                    )}
                  </div>
                ))}
              </div>
              <div className="images-container">
                {filteredData.filter((item, index) => index % 3 === 1).map(photo => (
                  <div key={photo._id}>
                    <Image
                      onClick={() => {
                        setSelectedPic(photo);
                        setOpened(true);
                      }}
                      className='image'
                      src={photo.url}
                      alt={photo._id}
                    />
                    {loggedIn && (
                      <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
                    )}
                  </div>
                ))}
              </div>
              <div className="images-container">
                {filteredData.filter((item, index) => index % 3 === 2).map(photo => (
                  <div key={photo._id}>
                    <Image
                      onClick={() => {
                        setSelectedPic(photo);
                        setOpened(true);
                      }}
                      className='image'
                      src={photo.url}
                      alt={photo._id}
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
    </>
  );
}
