import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Nav from "../component/Nav"
import Footer from "../component/Footer"
import "./Payment.css"
import { url } from "../url"

export default function Payment() {

    const user = useSelector((state) => state.user.value)
    const carts = useSelector((state) => state.cart.value)
    const total = useSelector((state) => state.cart.total)
    const [customer, setCustomer] = useState({})
    const [payMethod, setPayMethod] = useState(0)

    let getData = async () => {
        await axios.get(url + "customers?customerId=" + user.userId, {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
            .then(res => setCustomer(res.data))
            .catch(e => console.log(e.message))
    }

    let amount = (cart) => {
        let product = cart.product
        let totalOption = 0
        let options = cart.options
        for (let i = 0; i < options.length; i++) {
            totalOption += options[i].unitPrice
        }
        return (product.unitPrice + totalOption) * cart.quantity
    }

    let pay = async () => {
        if (payMethod === 2) {
            await axios.post(url + "payments?total=" + total, {}, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
                .then(res => window.location.href = res.data)
                .catch(e => console.log(e))
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <div className="col-md left">
                    <div className="row">
                        <label htmlFor="name" className="col-md">Họ và tên:</label>
                        <input type="text" id="name" className="col-md" placeholder="Họ và tên..." value={customer.customerName} disabled />
                    </div>
                    <div className="row">
                        <label htmlFor="phone-num" className="col-md">Số điện thoại:</label>
                        <input type="text" id="phone-num" className="col-md" placeholder="Số điện thoại..." value={customer.phoneNumber} disabled />
                    </div>
                    <div className="row">
                        <label htmlFor="address" className="col-md">Địa chỉ:</label>
                        <textarea id="address" className="col-md" placeholder="Địa chỉ..." value={customer.address} maxLength="100" disabled />
                    </div>
                    <div className="row">
                        <label htmlFor="note" className="col-md">Ghi chú đơn hàng:</label>
                        <input type="text" id="note" className="col-md" placeholder="Ghi chú đơn hàng..." />
                    </div>
                    <div className="row">
                        <label>Chọn phương thức thanh toán:</label>
                        <div className="col-md form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="1" onChange={e => e.target.checked ? setPayMethod(1) : ""} />
                            <label className="form-check-label" htmlFor="radio1">Tiền mặt</label>
                        </div>
                        <div className="col-md form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="2" onChange={e => e.target.checked ? setPayMethod(2) : ""} />
                            <label className="form-check-label" htmlFor="radio2">Zalopay</label>
                        </div>
                    </div>
                </div>
                <div className="col-md right">
                    <ul className="products">
                        {
                            carts.map((cart, i) =>
                                <li key={i} className="row">
                                    <div className="col-md">
                                        <img src={cart.product.imgPath} width="100px" />
                                    </div>
                                    <div className="col-md">
                                        <h5>{cart.product.productName}</h5>
                                        {
                                            cart.options.map(option =>
                                                <h6 key={option.optionId}>{option.optionName}</h6>
                                            )
                                        }
                                        <h6>{cart.note}</h6>
                                    </div>
                                    <div className="col-md">
                                        <h5>{cart.quantity} {cart.product.unit}</h5>
                                    </div>
                                    <div className="col-md">
                                        <h5>{amount(cart).toLocaleString({ style: "currency", currency: "vnd" })}đ</h5>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div className="row">
                        <h5 style={{ textAlign: "end" }}>Tổng cộng: {total.toLocaleString({ style: "currency", currency: "vnd" })}đ</h5>
                    </div>
                    <div className="row mt-3" style={{ justifyContent: "end" }}>
                        <button type="button" className="btn btn-success col-md-3" onClick={e => pay()}>Thanh toán</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}