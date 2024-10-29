import  { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer'
// import Header from './components/layout/header'
import Navbar from './components/layout/navbar'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
     
      <Navbar />
      <Outlet />
      <Footer />


    </>
  )
}

export default App;
