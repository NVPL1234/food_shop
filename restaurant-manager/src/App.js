import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login"
import Home from "./page/Home"
import Payment from "./page/Payment"
import PaymentSuccess from './page/PaymentSuccess'
import OrderSuccess from './page/OrderSuccess'
import UpdateProduct from "./page/UpdateProduct"
import UpdateProductCategory from './page/UpdateProductCategory'
import UpdateCustomer from './page/UpdateCustomer'
import UpdateEmployee from './page/UpdateEmployee'
import UpdateOption from './page/UpdateOption'
import UpdateOptionCategory from './page/UpdateOptionCategory'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/payment_success' element={<PaymentSuccess />}></Route>
        <Route path='/order_success' element={<OrderSuccess />}></Route>
        <Route path='/update_product' element={<UpdateProduct />}></Route>
        <Route path='/update_product_category' element={<UpdateProductCategory />}></Route>
        <Route path='/update_customer' element={<UpdateCustomer />}></Route>
        <Route path='/update_employee' element={<UpdateEmployee />}></Route>
        <Route path='/update_option' element={<UpdateOption />}></Route>
        <Route path='/update_option_category' element={<UpdateOptionCategory />}></Route>
      </Routes>
    </BrowserRouter>
  );
}