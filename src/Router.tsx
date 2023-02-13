import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Checkout } from './pages/Checkout/index'
import { Empty } from './pages/Empty'
import { Home } from './pages/Home/index'
import { Success } from './pages/Success/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/empty" element={<Empty />} />
      </Route>
    </Routes>
  )
}
