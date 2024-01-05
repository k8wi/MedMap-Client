import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import Hospital from './pages/Hospital';
import HospitalDetailsPage from './components/HospitalDetailsPage'

export default function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Hospital' element={<Hospital  />}/>
      <Route path="/hospital/:id" element={<HospitalDetailsPage/>} />
    </Routes>
  )
}