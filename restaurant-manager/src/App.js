import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./page/Login"
import Home from "./page/Home"
import Payment from "./page/Payment"
import PaymentSuccess from './page/PaymentSuccess'
import OrderSuccess from './page/OrderSuccess'
import OrderHistory from './page/OrderHistory'
import Dashboard from './page/Dashboard'
import UpdateProduct from "./page/UpdateProduct"
import UpdateProductCategory from './page/UpdateProductCategory'
import UpdateOrder from './page/UpdateOrder'
import UpdateCustomer from './page/UpdateCustomer'
import UpdateEmployee from './page/UpdateEmployee'
import UpdateOption from './page/UpdateOption'
import UpdateOptionCategory from './page/UpdateOptionCategory'
import RevenueStatistics from './page/RevenueStatistics'
import Profile from './page/Profile'
import ChangePassword from './page/ChangePassword'
import { useSelector } from 'react-redux'

export default function App() {

  const user = useSelector((state) => state.user.value)

  return (
    <BrowserRouter>
      <Routes>
        {user.token == '' && <Route path='/login' element={<Login />}></Route>}
        <Route path='/' element={user.roleId == 1 ? <Home /> : <Dashboard />}></Route>
        {user.roleId == 1 && <Route path='/payment' element={<Payment />}></Route>}
        {user.roleId == 1 && <Route path='/payment_success' element={<PaymentSuccess />}></Route>}
        {user.roleId == 1 && <Route path='/order_success' element={<OrderSuccess />}></Route>}
        {user.roleId == 1 && <Route path='/order_history' element={<OrderHistory />}></Route>}
        {user.roleId == 2 && <Route path='/update_product' element={<UpdateProduct />}></Route>}
        {user.roleId == 2 && <Route path='/update_product_category' element={<UpdateProductCategory />}></Route>}
        {user.roleId == 2 && <Route path='/update_order' element={<UpdateOrder />}></Route>}
        {user.roleId == 2 && <Route path='/update_customer' element={<UpdateCustomer />}></Route>}
        {user.roleId == 2 && <Route path='/update_employee' element={<UpdateEmployee />}></Route>}
        {user.roleId == 2 && <Route path='/update_option' element={<UpdateOption />}></Route>}
        {user.roleId == 2 && <Route path='/update_option_category' element={<UpdateOptionCategory />}></Route>}
        {user.roleId == 2 && <Route path='/revenue_statistics' element={<RevenueStatistics />}></Route>}
        {user.token != '' && <Route path='/profile' element={<Profile />}></Route>}
        {user.token != '' && <Route path='/change_password' element={<ChangePassword />}></Route>}
      </Routes>
    </BrowserRouter>
  )
}