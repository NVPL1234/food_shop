import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl"
import "./Nav.css"
import Cart from './Cart'

export default function Nav() {

    const roleId = useSelector((state) => state.user.value.roleId)

    return (
        <>
            <nav className="row navbar navbar-expand-md sticky-top" style={{ backgroundColor: 'white' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://mrchef.vn/">
                        <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" alt="logo" style={{ width: "40px" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Giới thiệu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gọi món</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Sản phẩm</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cập nhật loại sản phẩm</a></li>
                                    <li><Link className="dropdown-item" to="/update_product">Cập nhật sản phẩm</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Hoá đơn</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cập nhật hoá đơn</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Khách hàng</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cập nhật khách hàng</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Nhân viên</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cập nhật nhân viên</a></li>
                                    <li><a className="dropdown-item" href="#">Gọi món</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Thống kê</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Thống kê doanh thu</a></li>
                                    <li><a className="dropdown-item" href="#">Thống kê sản phẩm</a></li>
                                </ul>
                            </li>
                            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#myModal2">
                                <button type="button" className="nav-link"><SlBasket /></button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" alt="avatar" style={{ width: "40px" }} className="rounded-pill" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Hồ sơ cá nhân</a></li>
                                    <li><a className="dropdown-item" href="#">Gọi món</a></li>
                                    <li><a className="dropdown-item" href="#">Đổi mật khẩu</a></li>
                                    <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
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