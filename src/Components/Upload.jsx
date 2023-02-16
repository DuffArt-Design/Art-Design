import axios from 'axios';
import { useState } from 'react';
import {  Input, MultiSelect } from '@mantine/core';

export default function Upload() {

  const [file, setFile] = useState('');
  const [folder, setFolder] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

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
      description
    };
    
    if (text.trim() !== '') {
      data.text = text;
    }
  
    console.log(data.file);
    try {
      const response = await axios.post('http://localhost:3001/pictures', data);
      console.log(response.data);
      setFile('');
      setName('');
      setDescription('');
      setText('');
    } catch (error) {
      console.error(error);
    }
  }
  
  
  return (
    <>
      <div>Upload</div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}