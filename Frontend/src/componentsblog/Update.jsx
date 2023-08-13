import React, { useState, useRef } from 'react';
import '../styles/Update.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import Axios from 'axios';
import { useBlogContext } from '../BlogProvider';
const Update = () => {
  const [primaryImage, setPrimaryImage] = useState(null);
  const [titleText, setTitleText] = useState('');
  const { selectedBlogId } = useBlogContext();
  const primaryImageInputRef = useRef(null);
  const id = selectedBlogId;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [desc, setDesc] = useState('');
  const handleEditorChange = (state) => {
    const plainText = editorState.getCurrentContent().getPlainText('\u0001');
    console.log('Plain Text:', plainText);
   setEditorState(state);
    setDesc(plainText);
  };
  
  const handlePrimaryImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width > 400 || image.height > 400) {
            alert('Please resize the image to 400x400 pixels or below.');
            primaryImageInputRef.current.value = '';
            return;
          }
          setPrimaryImage(file);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleTextChange = (event) => {
    setTitleText(event.target.value);
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Technology', 'Travel', 'Food', 'Fashion', 'Health'];
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    console.log(contentRaw);
    const formData = new FormData();
    formData.append("p_img", primaryImage);
    formData.append("category", selectedCategory);
    formData.append("title", titleText);
    formData.append("description", desc);

    try {
      await Axios.put(`http://localhost:5000/api/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Data uploaded successfully");
    } catch (error) {
      console.error("Error uploading data:", error);
    }


    console.log('Submitted data:', {
      primaryImage,
      selectedCategory,
      titleText,
      // contentRaw,
    });
  };


  return (
    <div className="blog-form-container mt-4 text-left">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="primaryImage">Updated Primary Image:</label>
          <input
            type="file"
            className="form-control"
            id="primaryImage"
            accept="image/*"
            onChange={handlePrimaryImageChange}
            required
            ref={primaryImageInputRef}
          />
          {primaryImage && (
            <img
              className="uploaded-image"
              src={primaryImage}
              alt="Primary Image"
            />
          )}
        </div>

        <div className="from-group">
          <label htmlFor="">Category of the Blog</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="Title">Updated Title:</label>
          <textarea
            id="TitleText"
            value={titleText}
            onChange={handleTitleTextChange}
            className="form-control"
            placeholder="Enter your Title here"
            required
          />
        </div>

            
          <label htmlFor="blogText">Updated Blog Text:</label>
         
          <div className="blog-text-container">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            
            placeholder="Enter your blog text here"
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
          </div>
        
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;


