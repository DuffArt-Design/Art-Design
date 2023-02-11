import { Image, Modal } from '@mantine/core';
import React, { useState, useEffect, useRef } from 'react';



export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');

  const leftColumnRef = useRef(null);

  // local use http://localhost:3001/photos
  // delpoyed use https://duff-server.onrender.com/photos

  useEffect(() => {
    fetch(`https://duff-server.onrender.com/photos`)
      .then(res => res.json())
      .then(data => setPhotos(data.resources))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (leftColumnRef.current) {
      const leftColumnItems = Array.from(leftColumnRef.current.children);
      const rightColumnItems = leftColumnItems.splice(0, Math.ceil(leftColumnItems.length / 2));
  
      const leftColumnHeights = leftColumnItems.map(item => item.offsetHeight);
      const rightColumnHeights = rightColumnItems.map(item => item.offsetHeight);
  
      rightColumnHeights.forEach((height, index) => {
        if (height > leftColumnHeights[index]) {
          rightColumnItems[index].classList.add('adjust-height');
        }
      });
  
      rightColumnItems.forEach((item, index) => {
        if (index % 2 === 1) {
          item.classList.add('alternate');
        }
      });
    }
  }, [photos]);
  
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
        <Image
          height={710}
          fit="contain"
          onClick={() => setOpened(true)}
          src={selectedPic}
          alt={selectedPic}
        />
      </Modal>
      <div className='big-container'>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 0 && item.public_id.startsWith("photos")).map(photo => (
            <Image
              onClick={() => {
                setSelectedPic(photo.url);
                setOpened(true);
              }}
              className={'image'}
              key={photo.public_id}
              src={photo.url}
              alt={photo.public_id}
            />
          ))}
        </div>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 1 && item.public_id.startsWith("photos")).map(photo => (
            <Image
              onClick={() => {
                setSelectedPic(photo.url);
                setOpened(true);
              }}
              className={'image'}
              key={photo.public_id}
              src={photo.url}
              alt={photo.public_id}
            />
          ))}
        </div>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 2 && item.public_id.startsWith("photos")).map(photo => (
            <Image
              onClick={() => {
                setSelectedPic(photo.url);
                setOpened(true);
              }}
              className={'image'}
              key={photo.public_id}
              src={photo.url}
              alt={photo.public_id}
            />
          ))}
        </div>
      </div>
    </>
  )  
}
