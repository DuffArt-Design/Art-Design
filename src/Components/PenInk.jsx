import { Image } from '@mantine/core';
import React, { useState, useEffect } from 'react';

export default function PenInk() {

  const [photos, setPhotos] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:3001/photos`)
      .then(res => res.json())
      .then(data => setPhotos(data.resources))
      .catch(err => console.error(err));
  }, []);

  const filteredData = photos.filter(item => item.public_id.startsWith("pen_ink"));

  return (
    <>
    <div className='big-container'>
<div className="images-container">
  {filteredData.filter((_, index) => index % 2 === 0).map(photo => (
    <Image className={'image'} key={photo.public_id} src={photo.url} alt={photo.public_id} />
  ))}
  </div>
  <div className="images-container">
  {filteredData.filter((_, index) => index % 2 !== 0).map(photo => (
    <Image className={'image'} key={photo.public_id} src={photo.url} alt={photo.public_id} />
  ))}
</div>
</div>
    </>
  )
}
