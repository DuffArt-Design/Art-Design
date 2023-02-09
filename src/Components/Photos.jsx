
import React, { useState, useEffect } from 'react';

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/photos')
      .then(res => res.json())
      .then(data => setPhotos(data.resources))
      .catch(err => console.error(err));
  }, []);


  return (
    <>
    {photos.map(photo => (
      <img key={photo.public_id} src={photo.url} alt={photo.public_id} width='45%'/>
    ))}
    </>
  )
}
