import Header from './pages/Header'
import {Outlet} from "react-router-dom"
import Hero from './pages/Landing'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'> 
      <Header />
      <Outlet />
    </div>
  )
}
