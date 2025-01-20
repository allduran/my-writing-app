import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import './styles/App.css';

const App = () => {
  const [writings, setWritings] = useState([]);
  const [activeWriting, setActiveWriting] = useState(null);

  const handleAddWriting = () => {
    const newWriting = { id: Date.now(), title: '', content: '' };
    setWritings([...writings, newWriting]);
    setActiveWriting(newWriting.id);
  };

  const handleDeleteWriting = (id) => {
    setWritings(writings.filter((writing) => writing.id !== id));
    if (activeWriting === id) setActiveWriting(null);
  };

  const handleUpdateWriting = (id, updatedWriting) => {
    setWritings(
      writings.map((writing) =>
        writing.id === id ? updatedWriting : writing
      )
    );
  };

  return (
    <div className="app">
      <Sidebar
        writings={writings}
        activeWriting={activeWriting}
        onAddWriting={handleAddWriting}
        onDeleteWriting={handleDeleteWriting}
        onSetActiveWriting={setActiveWriting}
      />
      <Editor
        activeWriting={writings.find((w) => w.id === activeWriting)}
        onUpdateWriting={handleUpdateWriting}
      />
    </div>
  );
};

export default App;
