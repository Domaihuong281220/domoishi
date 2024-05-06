import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [files, setFiles] = useState([]); // Using an array to store files
  const [title, setTitle] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [gfsInitialized, setGfsInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => setGfsInitialized(true), 1000);
  }, []);

  // Handle changes to the file inputs
  const handleFileChange = (event, index) => {
    const newFiles = [...files]; // Make a copy of the current files array
    newFiles[index] = event.target.files[0]; // Update the file at the specified index
    setFiles(newFiles); // Update the state
  };

  const handleUpload = async () => {
    if (files.length < 2 || !files[0] || !files[1]) {
      alert('Please select both files first!');
      return;
    }

    if (!gfsInitialized) {
      alert('Image upload functionality not yet ready. Please try again later.');
      return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('files', file)); // Append each file in the array
    formData.append('title', title);
    formData.append('longdescription', longDescription);
    formData.append('shortdescription', shortDescription);

    try {
      const response = await axios.post('http://localhost:4000/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      alert('Images uploaded successfully: ' + response.data.path);
    } catch (error) {
      alert('Error uploading images: ' + error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Long Description"
        value={longDescription}
        onChange={(e) => setLongDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Short Description"
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => handleFileChange(e, 0)} // Manage the first file
      />
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => handleFileChange(e, 1)} // Manage the second file
      />
      <button onClick={handleUpload} disabled={!gfsInitialized}>
        Upload Images
      </button>
    </div>
  );
};

export default ImageUploader;
