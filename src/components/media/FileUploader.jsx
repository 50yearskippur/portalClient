import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import React from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import List from '@mui/material/List';
import FileIcon from './FileIcon'; 

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter(file => file.name !== fileName));
  };

  return (
    <div className="file-upload-container" {...getRootProps()}>
      {files.length > 0 && (
        <List className="file-list">
          {files.map((file) => (
            <FileIcon key={file.path} file={file} onRemove={handleRemoveFile} />
          ))}
        </List>
      )}
      <input {...getInputProps({ multiple: true })} />
      <UploadFileIcon fontSize="large" />
      <div className="upload-file-text-container">
        <div className="file-upload-text">לחץ לעלות קבצים או גררו לתיבה</div>
      </div>
      <div className="upload-btn back" style={{ marginTop: "32px" }}>
        בחר קובץ
      </div>
    </div>
  );
};

export default FileUploader;
