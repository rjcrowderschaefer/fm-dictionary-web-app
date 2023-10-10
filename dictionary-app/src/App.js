import React from 'react';
import './App.css';
import '../dist/output.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Error from "./pages/Error";
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
    <div className="content-container">
      <Header />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':id'>
          <Route path='' element={<Result />} />
        </Route>
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer /> */}
    </div>
    </>
  );
}

export default App;
