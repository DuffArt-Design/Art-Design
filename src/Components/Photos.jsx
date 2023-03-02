import { Image, Indicator, Modal, Text, Group } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader';

export default function Photos({ loggedIn }) {
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
            const filteredData = data.filter(photo => photo.id.startsWith("photos"));
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
      const filteredData = data.filter(photo => photo.id.startsWith("photos"));
      setPhotos(filteredData);
      setLoading(false);
      setTimeout(() => {
        const images = document.querySelectorAll('.image-fade-in');
        images.forEach((img) => {
          img.classList.remove('image-fade-in');
        });
      }, 300);
    })
    .catch(err => console.error(err));
};

  useEffect(() => {
    fetchPhotos();
  }, []);



  return (
    <>
          {loading &&
        <div className='loading_container'>
          <Group position="center">
          <h1 className='loading'>Loading Images</h1>
          <div class="icon-container">
            <BarLoader
              color='white'
              loading={loading}
              height={10}
              width={1500}
            />
          </div>
          </Group>
        </div>}
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
      <div className='big-container'>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 0).map(photo => (
            <div key={photo._id}>
              <Image
                onClick={() => {
                  setSelectedPic(photo);
                  setOpened(true);
                }}
                className='image image-fade-in'
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
                className='image image-fade-in'
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
                className='image image-fade-in'
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
