/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import AddEvent from './pages/AddEvent'
import CalendarView from './pages/CalendarView'


function App() {
  return (
  
    <Routes> 
      <Route path='/' element={<Layout />}>
        <Route index element = {<IndexPage />} />
        <Route path='/createEvent' element = {<AddEvent/>} />
        <Route path='/calendar' element={<CalendarView />} />
      </Route>

      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
    </Routes>
  )
}

export default App
