import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" value="art" name="cat" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" value="science" name="cat" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" value="technology" name="cat" id="technology" />
            <label htmlFor="technology">Technology</label>{" "}
          </div>
          <div className="cat">
            <input type="radio" value="cinema" name="cat" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" value="art" name="cat" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" value="art" name="cat" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
