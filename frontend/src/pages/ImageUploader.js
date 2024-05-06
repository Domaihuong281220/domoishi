import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [file, setFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set selected file
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file); // Ensure the name 'file' matches the server expectations

        try {
            const response = await axios.post('http://localhost:4000/saveImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully: ' + response.data.path);
        } catch (error) {
            alert('Error uploading image: ' + error.response.data.message);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>
                Upload Image
            </button>
        </div>
    );
};

export default ImageUploader;
