import './App.css';
import {BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import Footercomponent from './components/Footercomponent';
import Headercomponent from './components/Headercomponent';
import ListEmploycomponent from './components/ListEmploycomponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div >
      <Router>
      <Headercomponent/>
      <div className='container'>
        <Routes>
          <Route path="/" Component={ListEmploycomponent}></Route>
          <Route path="/employees" Component={ListEmploycomponent}></Route>
          <Route path="/addemployee" Component={AddEmployeeComponent}></Route>
          <Route path= "/edit-employee/:id" Component={AddEmployeeComponent}></Route>
          </Routes>
        </div>
      <Footercomponent/>
      </Router>
    </div>
  );
}

export default App;
