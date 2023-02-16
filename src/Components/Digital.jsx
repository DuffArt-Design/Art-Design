import { Image, Indicator, Modal } from '@mantine/core';
import React, { useState, useEffect } from 'react';

export default function Digital({ loggedIn }) {
  const [photos, setPhotos] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');

  // const leftColumnRef = useRef(null);

  // local use http://localhost:3001/photos
  // deployed use https://duff-server.onrender.com/photos

  const handleDelete = (photo) => {
    fetch(`https://duff-server.onrender.com/pictures/${photo._id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch(`https://duff-server.onrender.com/pictures`)
          .then(res => res.json())
          .then(data => {
            console.log('data:', data); // log the response from the server
            const filteredData = data.filter(photo => photo.id.startsWith("digital"));
            setPhotos(filteredData);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };
  
  
  const fetchPhotos = () => {
    fetch(`https://duff-server.onrender.com/pictures`)
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(photo => photo.id.startsWith("digital"));
        setPhotos(filteredData);
      })
      .catch(err => console.error(err));
  };
  
  useEffect(() => {
    fetchPhotos();
  }, []);
  


  
  return (
    <>
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
            <h2>{selectedPic.name}</h2>
            <p>{selectedPic.description}</p>
            <p>{selectedPic.text}</p>
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
