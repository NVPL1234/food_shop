import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login"
import Home from "./page/Home"
import UpdateProduct from "./page/UpdateProduct"
import Payment from "./page/Payment"
import PaymentSuccess from './page/PaymentSuccess'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/update_product' element={<UpdateProduct />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/payment_success' element={<PaymentSuccess />}></Route>
      </Routes>
    </BrowserRouter>
  );
}