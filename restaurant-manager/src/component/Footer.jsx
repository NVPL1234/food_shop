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
                    <a href="#" className="row">Trang chủ</a>
                    <a href="#" className="row">Giới thiệu</a>
                    <a href="#" className="row">Gọi món</a>
                </div>
            </div>
            <div className="row">
                <span style={{textAlign: 'center'}}>Copyright © 2010-2024 Mr.Chef. All rights reserved.</span>
            </div>
        </footer>
    )
}