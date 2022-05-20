import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import CheckLastUrlAll from './pages/CheckLastUrlAll';
import CheckAllUrlOfAWeb from './pages/CheckAllUrlOfAWeb';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  let [checkReload, setCheckReload] = useState({name: '', onlyMain: ''})
  let [reTest, setReTest] = useState({test: '', type: ''})
  let [followReTest, setFollowReTest] = useState(false)
  
  return (
    <>
    <Router>
      <div className="container">      
        <div className="app">
          <Header handleCheckReload={setCheckReload} reTest={reTest} followReTest={followReTest}/>
          <Routes>
            <Route path="/" exact element={<CheckLastUrlAll checkReload={checkReload} handleReTest={setReTest} handleFollowReTest={setFollowReTest}/>}/>
            <Route path="/pingTest/:id" element={<CheckAllUrlOfAWeb handleFollowReTest={setFollowReTest}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
