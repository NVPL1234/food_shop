import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { save } from "../redux/cartSlice"
import { HiOutlineMinus } from "react-icons/hi"
import { IoAdd } from "react-icons/io5"
import { url } from "../url"

export default function FormOrder(prop) {

    const user = useSelector((state) => state.user.value)
    const product = prop.product
    const [quantity, setQuantity] = useState(1)
    const [options, setOptions] = useState([])
    const [checkedOptions, setCheckedOptions] = useState([])
    const [note, setNote] = useState("")
    const [amount, setAmount] = useState(product.unitPrice)
    const dispatch = useDispatch()

    let refresh = async () => {
        setQuantity(1)
        setCheckedOptions([])
        setNote("")
        setAmount(product.unitPrice)
        await axios.get(url + "products/option?productId=" + product.productId, {
            headers: {
                "Authorization": "Bearer " + user.token
            }
        })
            .then(res => setOptions(res.data))
            .catch(e => console.log(e.message))
    }

    let handleChange = (e, option) => {
        if (e.target.checked) {
            if (e.target.type == "radio")
                setCheckedOptions(checkedOptions.filter(o => o.optionCategoryName != option.optionCategoryName))
            setAmount(amount + option.unitPrice * quantity)
            setCheckedOptions(oldOption => [...oldOption, option])
        }
        else {
            setAmount(amount - option.unitPrice * quantity)
            setCheckedOptions(checkedOptions.filter(o => o != option))
        }
    }

    let handleBtnMinus = (e) => {
        if (quantity > 1) {
            let newQuantity = quantity - 1
            let unitPriceOption = 0
            for (let i = 0; i < checkedOptions.length; i++) {
                unitPriceOption += checkedOptions[i].unitPrice
            }
            setAmount((unitPriceOption + product.unitPrice) * newQuantity)
            setQuantity(newQuantity)
        }
    }

    let handleBtnAdd = (e) => {
        let newQuantity = quantity + 1
        let unitPriceOption = 0
        for (let i = 0; i < checkedOptions.length; i++) {
            unitPriceOption += checkedOptions[i].unitPrice
        }
        setAmount((unitPriceOption + product.unitPrice) * newQuantity)
        setQuantity(newQuantity)
    }

    let addToCart = () => {
        dispatch(save({
            product: product,
            quantity: quantity,
            options: checkedOptions,
            note: note,
            amount: amount
        }))
    }

    useEffect(() => {
        refresh()
    }, [product])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <img src={product.imgPath} width="100px" />
                </div>
                <div className="col-md">
                    <h5>{product.productName}</h5>
                    <h5>{product.unitPrice.toLocaleString({ style: "currency", currency: "vnd" })}đ</h5>
                    <h6>Mô tả....</h6>
                </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-light" onClick={e => handleBtnMinus(e)}><HiOutlineMinus /></button>
                </div>
                <div className="col-md-1">
                    <span className="lbl-quantity">{quantity}</span>
                </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-light" onClick={e => handleBtnAdd(e)}><IoAdd /></button>
                </div>
            </div>
            <div className="row mt-3">
                {
                    options.map((option, i, arr) =>
                        <div key={i} className={i == 0 ? "col-md" : (arr[i - 1].optionCategoryName != option.optionCategoryName ? "col-md" : "")}>
                            <h6>{i == 0 ? option.optionCategoryName : (arr[i - 1].optionCategoryName != option.optionCategoryName ? option.optionCategoryName : "")}</h6>
                            <div className="form-check">
                                <input type={option.chooseMultiple ? "checkbox" : "radio"} className="form-check-input" id={option.optionName} name="optradio" value={option.optionName} onChange={e => handleChange(e, option)} />
                                <label className="form-check-label" htmlFor={option.optionName}>{option.optionName}{option.unitPrice > 0 && <span className="lbl-price"> + {option.unitPrice.toLocaleString({ style: "currency", currency: "vnd" })}đ</span>}</label>
                            </div>
                        </div>
                    )
                }
                <label htmlFor="txt-note" className="mt-2">Ghi chú:</label>
                <textarea id="txt-note" name="text" placeholder="Vd: Không hành..." maxLength="100" value={note} onChange={e => setNote(e.target.value)}></textarea>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={e => addToCart()}>Thêm vào giỏ +{amount.toLocaleString({ style: "currency", currency: "vnd" })}đ</button>
            </div>
        </div>
    )
}