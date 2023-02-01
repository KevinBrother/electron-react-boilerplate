import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { getIpcExample, setIpcPing, invokeExample } from './utils/ipcrender';

import './App.css';

const Hello = () => {
  const [ipcExampleText, setIpcExampleText] = useState('');

  setIpcPing();

  getIpcExample()
    .then((msg) => setIpcExampleText(msg))
    .catch((err) => console.error(err));

  invokeExample()
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => console.error(err));
  return (
    <div>
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
