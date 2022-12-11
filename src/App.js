import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  pagesize = 5;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/general" element={<News key="1" pageSize={this.pagesize} category="general" country="us" />} />
            <Route path="/business" element={<News key="2" pageSize={this.pagesize} category="business" country="us" />} />
            <Route path="/entertainment" element={<News key="3" pageSize={this.pagesize} category="entertainment" country="us" />} />
            <Route path="/sports" element={<News key="4" pageSize={this.pagesize} category="sports" country="us" />} />
            <Route path="/science" element={<News key="5" pageSize={this.pagesize} category="science" country="us" />} />
            <Route path="/technology" element={<News key="6" pageSize={this.pagesize} category="technology" country="us" />} />
            <Route path="/health" element={<News key="7" pageSize={this.pagesize} category="health" country="us" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
