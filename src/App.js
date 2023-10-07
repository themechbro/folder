import React from 'react';
import FolderStructure from './FolderStructure';

const jsonData = {
  Documents: ['Document1.jpg', 'Document2.jpg', 'Document3.jpg'],
  Desktop: ['Screenshot1.jpg', 'videopal.mp4'],
  Downloads: {
    Drivers: ['Printerdriver.dmg', 'cameradriver.dmg'],
    Applications: ['Webstorm.dmg', 'Pycharm.dmg', 'FileZila.dmg', 'Mattermost.dmg'],
  },

};

function App() {
  return (
    <div className="App">
      <FolderStructure data={jsonData} />
    </div>
  );
}

export default App;
