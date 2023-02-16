import axios from 'axios';
import { useEffect,useState } from 'react';
import {  Alert, Input, MultiSelect, Button } from '@mantine/core';

export default function Upload() {

  const [file, setFile] = useState('');
  const [folder, setFolder] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const folders = [
    { value: 'digital', label: 'Digital' },
    { value: 'pen_ink', label: 'Pen & Ink' },
    { value: 'photos', label: 'Photos' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      file,
      folder: folder.join(''),
      name,
      description,
      text

    };
    
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(process.env.REACT_APP_SERVER_URL, data);
      setFile('');
      setName('');
      setDescription('');
      setText('');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);
  
  
  return (
    <>
      <div className='upload'>
      {showAlert && (
        <Alert
          title="Image Successfully Uploaded!"
          color="teal"
          radius="lg"
          variant="filled"
          className={`alert-transition ${showAlert ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className='upload_background'>
      <Input.Wrapper
          id="input-link"
          withAsterisk
          label="Insert Image Link"
        >
          <Input id="input-link" placeholder="Link to Image" value={file} onChange={(event) => setFile(event.target.value)} />
        </Input.Wrapper>
        <MultiSelect
          data={folders}
          label="Select where you will upload to"
          placeholder="Choose a Folder"
          maxSelectedValues={1}
          withAsterisk
          value={folder}
          onChange={setFolder}
        />
        <Input.Wrapper
          id="input-name"
          withAsterisk
          label="Name of Piece"
        >
          <Input id="input-name" placeholder="Digtal art #7" value={name} onChange={(event) => setName(event.target.value)} />
        </Input.Wrapper>
        <Input.Wrapper
          id="input-details"
          withAsterisk
          label="Details"
        >
          <Input id="input-details" placeholder="12x10 Acrylic Paint on Canvas 2023" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Input.Wrapper>
        <Input.Wrapper
          id="input-text"
          label="Extra information"
        >
          <Input id="input-text" placeholder="This is one of my favorites pieces because of etc.." value={text} onChange={(event) => setText(event.target.value)} />
        </Input.Wrapper>
        <Button className='upload_button' type="submit">Submit</Button>
        </div>
      </form>
      </div>
    </>
  );
}
