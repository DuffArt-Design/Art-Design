import React, { useState, useEffect } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/photos')
      .then(res => res.json())
      .then(data => setPhotos(data.resources))
      .catch(err => console.error(err));
  }, []);

  console.log(photos);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my website</h1>
        <p>This is some sample text</p>
        <hr />
        <h2>Photos</h2>
        {photos.map(photo => (
          <img key={photo.public_id} src={photo.url} alt={photo.public_id} />
        ))}
      </header>
    </div>
  );
};

export default App;
