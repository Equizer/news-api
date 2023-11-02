import './App.css';

import React, { useState } from 'react';
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgressFunction] = useState(0);

  const setProgressFunctionFunction = (progressParam) => {
    setProgressFunction(progressParam);
  }

  return (
    <>
      <Router>
        <LoadingBar color='#f11946' progress={progress} shadow='true' height={2.5} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="general" pageSize={pageSize} category='general' />} />
          <Route exact path="/business" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="business" pageSize={pageSize} category='business' />} />
          <Route exact path="/entertainment" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="entertainment" pageSize={pageSize} category='entertainment' />} />
          <Route exact path="/general" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="general" pageSize={pageSize} category='general' />} />
          <Route exact path="/health" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="health" pageSize={pageSize} category='health' />} />
          <Route exact path="/science" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="science" pageSize={pageSize} category='science' />} />
          <Route exact path="/sports" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="sports" pageSize={pageSize} category='sports' />} />
          <Route exact path="/technology" element={<News setProgressFunction={setProgressFunction} apiKey={apiKey} key="technology" pageSize={pageSize} category='technology' />} />
          <Route exact path="/saved" />
        </Routes>
      </Router>
    </>

  )
}

export default App
