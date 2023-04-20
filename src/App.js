import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom"
import React from "react";
import Route from '../src/component/routes/index'
import AuthProvider from "./component/AuthProvider";

function App() {
  return (
      <>
          <BrowserRouter>
              <AuthProvider>
                 <Route/>
              </AuthProvider>
          </BrowserRouter>
      </>
  );
}
export default App;
