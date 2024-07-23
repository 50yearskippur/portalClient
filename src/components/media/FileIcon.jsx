import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import "./FileUploader.css";

const FileIcon = ({ file, onRemove }) => {
  const handleClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <ListItem className="file-icon" onClick={handleClick}>
    <div className="file-icon-container">
      <IconButton edge="end" aria-label="delete" style={{alignSelf: 'self-end'}} onClick={() => onRemove(file.name)}>
        <DeleteIcon />
      </IconButton>
      <ListItemIcon>
        <ArticleIcon style={{fontSize: '150px'}}/>
      </ListItemIcon>
      <ListItemText primary={file.name} />
    </div>
    </ListItem>
  );
};

export default FileIcon;
