import { Image, Indicator, Modal, Text } from '@mantine/core';
import React, { useState, useEffect } from 'react';

export default function Digital({ loggedIn }) {
  const [photos, setPhotos] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [loading, setLoading] = useState(true);

  const handleDelete = (photo) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${photo._id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch(process.env.REACT_APP_SERVER_URL)
          .then(res => res.json())
          .then(data => {
            console.log('data:', data); // log the response from the server
            const filteredData = data.filter(photo => photo.id.startsWith("digital"));
            setPhotos(filteredData);
            setLoading(false);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };


  const fetchPhotos = () => {
    fetch(process.env.REACT_APP_SERVER_URL)
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(photo => photo.id.startsWith("digital"));
        setPhotos(filteredData);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);




  return (
    <>
      {loading && <div >
        <h1 className='loading'>Loading Images...</h1>
        <div class="icon-container">
          <i class="fas fa-circle"></i>
        </div>
      </div>}
      <Modal
        size="85%"
        overlayColor='white'
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
              <Text fz="lg" fw={700}>{selectedPic.name}</Text>
              <Text fs="italic">{selectedPic.description}</Text>
              {selectedPic.text && (
                <Text c="dimmed">From the Artist: "{selectedPic.text}"</Text>
              )
              }
            </div>
          </>
        )}
      </Modal>
      <div className='big-container'>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 0).map(photo => (
            <div key={photo._id}>
              <Image
                onClick={() => {
                  setSelectedPic(photo);
                  setOpened(true);
                }}
                className={'image'}
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
          {photos.filter((item, index) => index % 3 === 1).map(photo => (
            <div key={photo._id}>
              <Image
                onClick={() => {
                  setSelectedPic(photo);
                  setOpened(true);
                }}
                className={'image'}
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
          {photos.filter((item, index) => index % 3 === 2).map(photo => (
            <div key={photo._id}>
              <Image
                onClick={() => {
                  setSelectedPic(photo);
                  setOpened(true);
                }}
                className={'image'}
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
    </>
  );

}
