import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element=<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={10} country='in' category='general' /> />
          <Route exact path='/business' element=<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={10} country='in' category='business' /> />
          <Route exact path='/entertainment' element=<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={10} country='in' category='entertainment' /> />
          <Route exact path='/health' element=<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={10} country='in' category='health' /> />
          <Route exact path='/science' element=<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={10} country='in' category='science' /> />
          <Route exact path='/sports' element=<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={10} country='in' category='sports' /> />
          <Route exact path='/tecnology' element=<News setProgress={setProgress} apiKey={apiKey} key='tecnology' pageSize={10} country='in' category='tecnology' /> />
          <Route exact path='/general' element=<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={10} country='in' category='general' /> />
        </Routes>
      </Router>

    </div>
  )
}

export default App

