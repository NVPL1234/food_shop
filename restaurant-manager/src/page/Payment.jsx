import Nav from "../component/Nav"
import Footer from "../component/Footer"
import "./Payment.css"

export default function Payment() {
    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <div className="col-md left">
                    <div className="row">
                        <label htmlFor="name" className="col-md">Họ và tên:</label>
                        <input type="text" id="name" className="col-md" placeholder="Họ và tên..." />
                    </div>
                    <div className="row">
                        <label htmlFor="phone-num" className="col-md">Số điện thoại:</label>
                        <input type="text" id="phone-num" className="col-md" placeholder="Số điện thoại..." />
                    </div>
                    <div className="row">
                        <label htmlFor="address" className="col-md">Địa chỉ:</label>
                        <input type="text" id="address" className="col-md" placeholder="Địa chỉ..." />
                    </div>
                    <div className="row">
                        <label htmlFor="note" className="col-md">Ghi chú đơn hàng:</label>
                        <input type="text" id="note" className="col-md" placeholder="Ghi chú đơn hàng..." />
                    </div>
                    <div className="row">
                        <label>Chọn phương thức thanh toán:</label>
                        <div className="col-md form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
                            <label className="form-check-label" htmlFor="radio1">Tiền mặt</label>
                        </div>
                        <div className="col-md form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                            <label className="form-check-label" htmlFor="radio2">Zalopay, MoMo, PayPal</label>
                        </div>
                    </div>
                </div>
                <div className="col-md right">
                    <ul className="products">
                        <li className="row">
                            <div className="col-md">
                                <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" width="100px" />
                            </div>
                            <div className="col-md">
                                <h5>Cơm gà</h5>
                                <h6>Gà + Cocacola</h6>
                            </div>
                            <div className="col-md">
                                <h5>1 phần</h5>
                            </div>
                            <div className="col-md">
                                <h5>25.000đ</h5>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-md">
                                <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" width="100px" />
                            </div>
                            <div className="col-md">
                                <h5>Cơm gà</h5>
                                <h6>Gà + Cocacola</h6>
                            </div>
                            <div className="col-md">
                                <h5>1 phần</h5>
                            </div>
                            <div className="col-md">
                                <h5>25.000đ</h5>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-md">
                                <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" width="100px" />
                            </div>
                            <div className="col-md">
                                <h5>Cơm gà</h5>
                                <h6>Gà + Cocacola</h6>
                            </div>
                            <div className="col-md">
                                <h5>1 phần</h5>
                            </div>
                            <div className="col-md">
                                <h5>25.000đ</h5>
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-md">
                                <img src="https://mrchef.vn/wp-content/uploads/2023/10/MrCheef_Logo-01.png" width="100px" />
                            </div>
                            <div className="col-md">
                                <h5>Cơm gà</h5>
                                <h6>Gà + Cocacola</h6>
                            </div>
                            <div className="col-md">
                                <h5>1 phần</h5>
                            </div>
                            <div className="col-md">
                                <h5>25.000đ</h5>
                            </div>
                        </li>
                    </ul>
                    <div className="row">
                        <h5 style={{ textAlign: "end" }}>Tổng cộng: 50.000đ</h5>
                    </div>
                    <div className="row mt-3" style={{ justifyContent: "end" }}>
                        <button type="button" className="btn btn-success col-md-3">Thanh toán</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}