import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPageComponent from '../pages/Dashboard/DashboardPageComponent'
import TicketPageComponent from '../pages/Tickets/TicketPageComponent'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<DashboardPageComponent/>}/>
        <Route path='/tickets' element={<TicketPageComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}
