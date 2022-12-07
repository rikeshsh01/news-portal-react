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
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route key="general" path="/general"  element={<News pageSize = {9}  category= "general" country="us"/>}/>
          <Route key="business" path="/business"  element={<News pageSize = {9} category= "business" country="us"/>}/>
          <Route key="entertainment" path="/entertainment"  element={<News pageSize = {9} category= "entertainment" country="us"/>}/>
          <Route key="sports" path="/sports"  element={<News pageSize = {9} category= "sports" country="us"/>}/>
          <Route key="science" path="/science"  element={<News pageSize = {9} category= "science" country="us"/>}/>
          <Route key="technology" path="/technology"  element={<News pageSize = {9} category= "technology" country="us"/>}/>
          <Route key="health" path="/health"  element={<News pageSize = {9} category= "health" country="us"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App
