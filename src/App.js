import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom"
import React from "react";
import Route from '../src/component/routes/index'
import AuthProvider from "./component/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

function App() {
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
  return (
      <>
          <Elements stripe={stripePromise}>
          <BrowserRouter>
              <AuthProvider>
                 <Route/>
                  <ToastContainer />
              </AuthProvider>
          </BrowserRouter>
          </Elements>
      </>
  );
}
export default App;
