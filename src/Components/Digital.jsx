import { Image, Modal } from '@mantine/core';
import React, { useState, useEffect } from 'react';



export default function Digital() {
  const [photos, setPhotos] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');

  // const leftColumnRef = useRef(null);

  // local use http://localhost:3001/photos
  // delpoyed use https://duff-server.onrender.com/photos

  useEffect(() => {
    fetch(`http://localhost:3001/pictures`)
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(photo => photo.id.startsWith("digital"));
        setPhotos(filteredData);
      })
      .catch(err => console.error(err));
  }, []);
  

  // useEffect(() => {
  //   if (leftColumnRef.current) {
  //     const leftColumnItems = Array.from(leftColumnRef.current.children);
  //     const rightColumnItems = leftColumnItems.splice(0, Math.ceil(leftColumnItems.length / 2));
  
  //     const leftColumnHeights = leftColumnItems.map(item => item.offsetHeight);
  //     const rightColumnHeights = rightColumnItems.map(item => item.offsetHeight);
  
  //     rightColumnHeights.forEach((height, index) => {
  //       if (height > leftColumnHeights[index]) {
  //         rightColumnItems[index].classList.add('adjust-height');
  //       }
  //     });
  
  //     rightColumnItems.forEach((item, index) => {
  //       if (index % 2 === 1) {
  //         item.classList.add('alternate');
  //       }
  //     });
  //   }
  // }, [photos]);

  console.log(photos);


  
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
            <Image
              onClick={() => {
                setSelectedPic(photo);
                setOpened(true);
              }}
              className={'image'}
              key={photo._id}
              src={photo.url}
              alt={photo._id}
            />
          ))}
        </div>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 1).map(photo => (
            <Image
              onClick={() => {
                setSelectedPic(photo);
                setOpened(true);
              }}
              className={'image'}
              key={photo._id}
              src={photo.url}
              alt={photo._id}
            />
          ))}
        </div>
        <div className="images-container">
          {photos.filter((item, index) => index % 3 === 2).map(photo => (
            <Image
              onClick={() => {
                setSelectedPic(photo);
                setOpened(true);
              }}
              className={'image'}
              key={photo._id}
              src={photo.url}
              alt={photo._id}
            />
          ))}
        </div>
      </div>
    </>
  )  
}
