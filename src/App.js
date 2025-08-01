import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Git from './components/git';
import Jenkins from './components/jenkins';
import Docker from './components/docker';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello World!!!</h1>

      <Router>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/git">Git</Link> |{" "}
          <Link to="/docker">Docker</Link> |{" "}
          <Link to="/jenkins">Jenkins</Link>
        </nav>

        <Routes>
          <Route path="/git" element={<Git />} />
          <Route path="/docker" element={<Docker />} />
          <Route path="/jenkins" element={<Jenkins />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
