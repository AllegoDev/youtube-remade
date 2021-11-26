import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Homepage from './screens/Homepage';
import {
  Routes,
  useNavigate,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import VideoPage from './screens/VideoPage';
import SearchScreen from './screens/SearchScreen';


function App() {
  const { accessToken,loading }= useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(()=>{    
    if (!loading && !accessToken){
      navigate('/login')
    }},[accessToken,loading,navigate])
    
  return (
    <Routes>
            <Route exact path="/" element={
            <div className="App">
              <Homepage />
            </div>
            } />
            <Route path="search/:query" element={<SearchScreen/>} />
            <Route path="login" element={<Login />} />
         
            <Route path="watch/:id" element={<VideoPage />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
  );
}

export default App;
