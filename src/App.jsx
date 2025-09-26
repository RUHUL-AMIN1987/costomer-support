import Menu from './component/Manubar/Menu'
import Footer from './component/Manubar/Footer/Footer'
import Form from './component/Form/Form'
import './App.css'
import { Suspense } from 'react';
import Customers from './component/Customers/Customers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const customerPromise = fetch('/Public.json').then(res => res.json());


function App() {
  

  return (
    <>
      <Menu></Menu>
       
        <Form></Form>
          <ToastContainer />
         <Suspense>
            <Customers customerPromise={customerPromise}></Customers>
         </Suspense>
       
      <Footer></Footer>

    </>
  )
}

export default App
