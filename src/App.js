import React from 'react';
import MainStyle from './components/MainStyle/MainStyle';
import Router from './components/Router/Router';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { SuspenseLoader } from "./components/Contexts/Loader";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MainStyle>
      <SuspenseLoader>
            <Router />
          </SuspenseLoader>
      </MainStyle>
      <Footer />
    </>
  );
}


export default App;
