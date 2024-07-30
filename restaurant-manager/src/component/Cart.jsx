import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"

export default function Cart() {

    const carts = useSelector((state) => state.cart.value)
    const total = useSelector((state) => state.cart.total)
    const navigate = useNavigate()

    let order = () => {
        navigate("/payment")
    }

    return (
        <div className="container">
            {
                carts.map((cart, i) =>
                    <CartItem key={i} index={i} />
                )
            }
            <div className="row mt-3">
                <h5 className="col-md lbl-total">Tổng cộng: {total.toLocaleString({ style: "currency", currency: "vnd" })}đ</h5>
                <button type="button" className="col-md-2 btn btn-success" data-bs-dismiss="modal" onClick={e => order()}>Đặt hàng</button>
            </div>
        </div>
    )
}