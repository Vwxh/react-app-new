import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Login} from './layout/login.js'
import {Dashboard }from './layout/dashboard.js'
import {User} from './features/user/user.js'
import {Error404} from './layout/404.js'
import { Attendance } from './features/attendance/attendance.js';
import { Device } from './features/device/device.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route index element={<User/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='device' element={<Device/>}/>
        <Route path='attendance' element={<Attendance/>}/>
        {/* <Route path='device' element={<Device/>}/> */}
        <Route path='*' element={<Error404/>}/>{/*Error 404 Part*/}
      </Route>
      
    </Routes>
  );
}

export default App;
