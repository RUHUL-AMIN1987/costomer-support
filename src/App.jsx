import Menu from './component/Manubar/Menu'
import Footer from './component/Manubar/Footer/Footer'
import Form from './component/Form/Form'
import './App.css'
import { Suspense } from 'react';
import Customers from './component/Customers/Customers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';


const customerPromise = fetch('/Public.json').then(res => res.json());


function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);


   const handleInProgress = () => setInProgressCount(prev => prev + 1);

   const handleResolved = () => {
    setInProgressCount(prev => prev - 1); 
    setResolvedCount(prev => prev + 1);  
  };

  return (
    <>
      <Menu></Menu>
       
         <Form inProgressCount={inProgressCount}  resolvedCount={resolvedCount}/>
          <ToastContainer />
         <Suspense fallback={<h3>Please Wait!.....</h3>}>
            <Customers customerPromise={customerPromise} 
              onSelect={handleInProgress} 
              onResolved={handleResolved}>
            </Customers>
         </Suspense>
       
      <Footer></Footer>

    </>
  )
}

export default App
