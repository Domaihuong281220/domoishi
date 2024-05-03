import React, { useState, useRef } from 'react';
import axios from 'axios';

import banner from "../assets/About/banner.png"
import subtraction from "../assets/About/Subtraction.png";
import { WhyPart1 } from "../components";

const About = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);  // create a ref for the file input

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Check the file type
            const fileType = selectedFile.type;
            if (fileType.match(/^image\/(jpeg|jpg|png|gif)$/)) {
                setFile(selectedFile); // Set the file to state if it's an image
            } else {
                alert('Please upload an image file (jpg, jpeg, png, or gif).');
            }
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select an image file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);  // append the file to the FormData object

        try {
            // Attempt to send the file via POST
            const response = await axios.post('http://localhost:4000/uppic', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Image uploaded successfully');
        } catch (error) {
            alert('Error uploading image: ' + error.message);
        }
    };

    return (
        <div className="w-full">
            <img src={banner} alt="" className="object-cover" />
            <div className="w-full h-fit relative mt-[-2rem]">
                <img src={subtraction} alt="" className="object-cover" />
                <div className="w-full absolute h-full top-0 flex flex-col space-y-8 pv:max-md:space-y-1 justify-center items-center">
                    <p className="font-jonitha lg:text-5xl w-full">#AboutDOMOISHI</p>
                    <p className="font-nexa_bold uppercase text-lg pt-6 lg:text-[1rem] lg:pt-0 w-[75%] pv:max-md:text-[6px] pv:max-md:leading-[11px] pv:max-md:pt-0">
                        Domoishi is a fast-growing Asian casual restaurant chain. Domoishi offers a variety of
                        addictive Asian favorites! Whether its fresh Ramen sourced from Japan, Hawaiian Poke bowls,
                        Taiwan’s Bubble Teas, or our savory Korean style wings, your Asian food and beverage cravings
                        will be completely satisfied! The exceptional quality and flavor will keep you coming back to Domoishi for more.
                    </p>
                </div>
            </div>
            <div className="w-full h-fit pv:max-md:px-[8%]">
                <WhyPart1 />
                <input type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    accept="image/jpeg, image/png, image/gif" />
                <button type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
                    Upload Image
                </button>
                <button type="button" onClick={handleUpload}>Send Image</button>
            </div>
        </div>
    );
}

export default About;
