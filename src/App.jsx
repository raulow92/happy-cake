import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css'

const App = () => {
    return (
        <> 
            <Router>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='contact' element={<Contact/>} />
                </Routes>
            </Router>
        </>
    );
};

export default App;