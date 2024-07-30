import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove, update } from "../redux/cartSlice"
import { MdOutlineDeleteOutline } from "react-icons/md"
import { HiOutlineMinus } from "react-icons/hi"
import { IoAdd } from "react-icons/io5"

export default function CartItem(prop) {

    const index = prop.index
    const cart = useSelector((state) => state.cart.value[index])
    const dispatch = useDispatch()
    let totalOption = (cart) => {
        let total = 0
        cart.options.forEach(option => total = total + option.unitPrice)
        return total
    }
    let quantity = cart.quantity
    const [amount, setAmount] = useState(0)

    let handleBtnMinus = () => {
        if(quantity > 1) {
            setAmount(amount - amount/quantity)
            dispatch(update({
                index: index,
                quantity: cart.quantity - 1,
                amount: -(amount/quantity)
            }))
        }
    }

    let handleBtnAdd = () => {
        setAmount(amount + amount/quantity)
        dispatch(update({
            index: index,
            quantity: cart.quantity + 1,
            amount: amount/quantity
        }))
    }

    useEffect(() => {
        setAmount((cart.product.unitPrice + totalOption(cart)) * cart.quantity)
    }, [cart])

    return (
        <div className="row" style={{ borderBottom: "1px solid #EFEFEF", paddingBottom: "20px", paddingTop: "10px" }}>
            <div className="col-md-1">
                <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => dispatch(remove({index: index, amount: amount}))} />
            </div>
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
                <h5>{amount.toLocaleString({ style: "currency", currency: "vnd" })}đ</h5>
            </div>
            <div className="col-md-1">
                <button type="button" className="btn btn-light" onClick={e => handleBtnMinus()}><HiOutlineMinus /></button>
            </div>
            <div className="col-md-1">
                <span className="lbl-quantity">{quantity}</span>
            </div>
            <div className="col-md-1">
                <button type="button" className="btn btn-light" onClick={e => handleBtnAdd()}><IoAdd /></button>
            </div>
        </div>
    )
}