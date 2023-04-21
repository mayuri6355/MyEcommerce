import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom"
import React from "react";
import Route from '../src/component/routes/index'
import AuthProvider from "./component/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <>
          <BrowserRouter>
              <AuthProvider>
                 <Route/>
                  <ToastContainer />
              </AuthProvider>
          </BrowserRouter>
      </>
  );
}
export default App;
