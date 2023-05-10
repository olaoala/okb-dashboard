import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Property from "./Pages/Property"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
       <Route path="/property" element={<Property />} />
        {/*  <Route path="/signup" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/Property/Details" element={<PropertyDetails/>}/>
        <Route path="/Agent" element={<Agent/>}/>
        <Route path="/Agent/Form" element={<AgentForm/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Property" element={<PropertiesList/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/> */}

      </Routes>
    </Router>

  );
}

export default App;
