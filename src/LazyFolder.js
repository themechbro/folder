import React from 'react';

const LazyFolder = ({ data }) => {
  return (
    <ul>
      {Object.keys(data).map((folderName) => (
        <li key={folderName}>
          <span>{folderName}</span>
        </li>
      ))}
    </ul>
  );
};

export default LazyFolder;
