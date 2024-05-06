import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [gfsInitialized, setGfsInitialized] = useState(false);

  useEffect(() => {
    // Simulate checking if gfs is initialized (replace with actual check)
    setTimeout(() => setGfsInitialized(true), 1000); // Simulate delay
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    if (!gfsInitialized) {
      alert('Image upload functionality not yet ready. Please try again later.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:4000/image', formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response)
      alert('Image uploaded successfully: ' + response.data.path);
    } catch (error) {
      alert('Error uploading image: ' + error.message);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!gfsInitialized}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploader;