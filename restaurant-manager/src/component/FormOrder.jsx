import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { HiOutlineMinus } from "react-icons/hi"
import { IoAdd } from "react-icons/io5"
import { url } from "../url"

export default function FormOrder(prop) {

    const product = prop.product
    const [quantity, setQuantity] = useState(1)
    const [options, setOptions] = useState([])
    const token = useSelector((state) => state.user.value.token)

    let getData = async () => {
        await axios.get(url + "products/option?productId=" + product.productId, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                setOptions(res.data)
                console.log(res.data);
            })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        getData()
    }, [product])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <img src={product.imgPath} width="100px" />
                </div>
                <div className="col-md">
                    <h5>{product.productName}</h5>
                    <h5>{product.unitPrice}đ</h5>
                    <h6>Mô tả....</h6>
                </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-light" onClick={e => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}><HiOutlineMinus /></button>
                </div>
                <div className="col-md-1">
                    <span className="lbl-quantity">{quantity}</span>
                </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-light" onClick={e => setQuantity(quantity + 1)}><IoAdd /></button>
                </div>
            </div>
            <div className="row mt-3">
                {
                    options.map((option, i, arr) => 
                        <div key={i} className={i == 0 ? "col-md" : (arr[i-1].optionCategoryName != option.optionCategoryName ? "col-md" : "")}>
                            <h6>{i == 0 ? option.optionCategoryName : (arr[i-1].optionCategoryName != option.optionCategoryName ? option.optionCategoryName : "")}</h6>
                            <div className="form-check">
                                <input type={option.chooseMultiple ? "checkbox" : "radio"} className="form-check-input" id={option.optionName} name="optradio" value={option.optionName} />
                                <label className="form-check-label" htmlFor={option.optionName}>{option.optionName}{option.unitPrice > 0 && <span className="lbl-price"> + {option.unitPrice.toLocaleString({ style: "currency", currency: "vnd" })}đ</span>}</label>
                            </div>
                        </div>
                    )
                }
                <label htmlFor="txt-note" className="mt-2">Ghi chú:</label>
                <textarea id="txt-note" name="text" placeholder="Vd: Không hành..." maxLength="100"></textarea>
            </div>
        </div>
    )
}