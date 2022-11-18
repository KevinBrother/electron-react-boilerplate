import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import icon from '../../assets/icon.svg';
import { getIpcExample, setIpcPing } from './utils/ipcrender';

import './App.css';

const Hello = () => {
  const [ipcExampleText, setIpcExampleText] = useState('');

  setIpcPing();

  getIpcExample()
    .then((msg) => setIpcExampleText(msg))
    .catch((err) => console.error(err));

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">good</div>
      <div className="Hello">{ipcExampleText}</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
