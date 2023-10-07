import React, { useState, lazy, Suspense } from 'react';
import './FolderStructure.css'; // Import your CSS file
const LazyFolder = lazy(() => import('./LazyFolder')); // Lazy-loaded component


const FolderStructure = ({ data }) => {
  const [openFolders, setOpenFolders] = useState([]);

  const toggleFolder = (folderName) => {
    if (openFolders.includes(folderName)) {
      setOpenFolders(openFolders.filter((folder) => folder !== folderName));
    } else {
      setOpenFolders([...openFolders, folderName]);
    }
  };

  const renderNode = (node, depth) => {
    if (Array.isArray(node)) {
      return node.map((file) => (
        <li key={file} className="file" style={{ marginLeft: `${depth * 20}px` }}>
          📄 {file}
        </li>
      ));
    } else if (typeof node === 'object') {
      return Object.keys(node).map((folderName) => {
        const subNode = node[folderName];

        return (
          <li key={folderName} style={{ marginLeft: `${depth * 20}px` }}>
            <span onClick={() => toggleFolder(folderName)} className={`folder ${openFolders.includes(folderName) ? 'open' : ''}`}>
              {openFolders.includes(folderName) ? '🔽' : '▶️'} {folderName}
            </span>
            {openFolders.includes(folderName) && (
              <ul>{renderNode(subNode, depth + 1)}</ul>
            )}
          </li>
        );
      });
    }
  };

  return <ul>{renderNode(data, 0)}</ul>;
};

export default FolderStructure;
