import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl"
import { RiAccountCircleLine } from "react-icons/ri"
import "./Nav.css"
import Cart from './Cart'
import { save } from "../redux/userSlice"
import { removeAll } from '../redux/cartSlice'

export default function Nav() {

    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    let logout = () => {
        dispatch(save({
            userId: 0,
            token: '',
            roleId: 0
        }))
        dispatch(removeAll())
    }

    return (
        <>
            <nav className="row navbar navbar-expand-md sticky-top" style={{ backgroundColor: 'white' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" alt="logo" style={{ width: "40px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Trang chủ</Link>
                            </li>
                            {user.roleId == 1 && <li className="nav-item">
                                <a className="nav-link" href="#">Giới thiệu</a>
                            </li>}
                            {user.roleId == 1 && <li className="nav-item">
                                <a className="nav-link" href="#">Gọi món</a>
                            </li>}
                            {user.roleId == 2 && <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Sản phẩm</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/update_product_category">Cập nhật loại sản phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="/update_product">Cập nhật sản phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="/update_option_category">Cập nhật loại tuỳ chọn</Link></li>
                                    <li><Link className="dropdown-item" to="/update_option">Cập nhật tuỳ chọn</Link></li>
                                </ul>
                            </li>}
                            {user.roleId == 2 && <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Hoá đơn</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/update_order">Cập nhật hoá đơn</Link></li>
                                </ul>
                            </li>}
                            {user.roleId == 2 && <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Khách hàng</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/update_customer">Cập nhật khách hàng</Link></li>
                                </ul>
                            </li>}
                            {user.roleId == 2 && <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Nhân viên</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/update_employee">Cập nhật nhân viên</Link></li>
                                </ul>
                            </li>}
                            {user.roleId == 2 && <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Thống kê</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/revenue_statistics">Thống kê doanh thu</Link></li>
                                </ul>
                            </li>}
                            {user.roleId == 1 && <li className="nav-item" data-bs-toggle="modal" data-bs-target="#myModal2">
                                <button type="button" className="nav-link"><SlBasket /></button>
                            </li>}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    <RiAccountCircleLine size={24} />
                                    {/* <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" alt="avatar" style={{ width: "40px" }} className="rounded-pill" /> */}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/profile">Hồ sơ cá nhân</Link></li>
                                    {user.roleId == 1 && <li><Link className="dropdown-item" to="/order_history">Lịch sử đơn hàng</Link></li>}
                                    <li><Link className="dropdown-item" to="/change_password">Đổi mật khẩu</Link></li>
                                    <li><Link className="dropdown-item" onClick={e => logout()} to='/login'>Đăng xuất</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="modal" id="myModal2">
                <div className="modal-dialog modal-fullscreen-md-down modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Giỏ hàng</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}