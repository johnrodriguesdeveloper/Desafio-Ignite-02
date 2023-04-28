import { Route, Routes } from 'react-router-dom'
import { SucessfulOrder } from './pages/SuccessfulOrder'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="successfulorder" element={<SucessfulOrder />} />
    </Routes>
  )
}
