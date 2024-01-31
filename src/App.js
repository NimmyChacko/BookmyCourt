
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/loginPage/LoginPage';
import Home from './pages/home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import AddNewCourt from './pages/NewCourt/AddNewCourt';
import CourtDetails from './pages/CourtDetails/CourtDetails';

function App() {
  return (
    
    <BrowserRouter>
   <Routes>

<Route path='/' element={<LoginPage/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/addNewCourt' element={ <AddNewCourt/>}/>
<Route path='/courtDetails/:id' element={ <CourtDetails/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
