import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="row mt-3">
            <div className="row mt-3">
                <div className="col-md">
                    <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" alt="logo" style={{ width: "100px" }} />
                    <span className="row">Hủ tíu Mr.Chef</span>
                    <span className="row">Địa chỉ: Tây, Đông Thạnh, Cần Giuộc, Long An</span>
                    <span className="row">Số điện thoại: 0906953700</span>
                </div>
                <div className="col-md">
                    <Link className="nav-link">Trang chủ</Link>
                    <Link className="nav-link">Giới thiệu</Link>
                    <Link className="nav-link">Gọi món</Link>
                </div>
            </div>
            <div className="row">
                <span style={{textAlign: 'center'}}>Copyright © 2010-2024 Mr.Chef. All rights reserved.</span>
            </div>
        </footer>
    )
}