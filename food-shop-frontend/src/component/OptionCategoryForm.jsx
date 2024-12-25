import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"

export default function OptionCategoryForm(prop) {

    const optionCategory = prop.optionCategory
    const getData = prop.getData
    const user = useSelector((state) => state.user.value)
    const activePage = useSelector((state) => state.activePage.value)
    const [optionCategoryName, setOptionCategoryName] = useState('')
    const [obligate, setObligate] = useState(true)
    const [chooseMultiple, setChooseMultiple] = useState(true)
    const inputYesObligateRef = useRef(null)
    const inputNoObligateRef = useRef(null)
    const inputYesChooseMultipleRef = useRef(null)
    const inputNoChooseMultipleRef = useRef(null)
    const [products, setProducts] = useState([])
    const [productIds, setProductIds] = useState([])

    let save = async () => {
        try {
            let res = await axios.post(url + 'optionCategories', {
                optionCategoryId: optionCategory != null ? optionCategory.optionCategoryId : 0,
                optionCategoryName: optionCategoryName,
                obligate: obligate,
                chooseMultiple: chooseMultiple
            }, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            let optionCategoryId = res.data.optionCategoryId
            await axios.delete(url + 'optionDetails?optionCategoryId=' + optionCategoryId, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            for (let i = 0; i < productIds.length; i++)
                await axios.post(url + 'optionDetails', {
                    id: {
                        optionCategoryId: optionCategoryId,
                        productId: productIds[i]
                    }
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
        getData(activePage - 1)
        console.log('save success!')
    }

    let refresh = async () => {
        let res = await axios.get(url + 'products', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
        setProducts(res.data)
        if (optionCategory != null) {
            let res = await axios.get(url + 'optionDetails?optionCategoryId=' + optionCategory.optionCategoryId, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            let optionDetails = res.data
            setOptionCategoryName(optionCategory.optionCategoryName)
            setObligate(optionCategory.obligate)
            setChooseMultiple(optionCategory.chooseMultiple)
            optionCategory.obligate ? inputYesObligateRef.current.checked = true : inputNoObligateRef.current.checked = true
            optionCategory.chooseMultiple ? inputYesChooseMultipleRef.current.checked = true : inputNoChooseMultipleRef.current.checked = true
            if(optionDetails.length > 0)
                for(let i=0; i<optionDetails.length; i++)
                    setProductIds(id => [...id, optionDetails[i].product.productId])
            else
                setProductIds([])
        }
        else {
            setOptionCategoryName('')
            setObligate(true)
            setChooseMultiple(true)
            inputYesObligateRef.current.checked = true
            inputYesChooseMultipleRef.current.checked = true
            setProductIds([])
        }
    }

    useEffect(() => {
        refresh()
    }, [optionCategory])

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <label htmlFor="" className="col-sm">Tên loại tuỳ chọn</label>
                <input type="text" className="col-sm" id="" placeholder="Tên loại tuỳ chọn..." value={optionCategoryName} onChange={e => setOptionCategoryName(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label className="col-sm">Bắt buộc</label>
                <div className="col-sm form-check">
                    <input ref={inputYesObligateRef} type="radio" className="form-check-input" id="radio1" name="optradio1" onChange={e => e.target.checked ? setObligate(true) : setObligate(false)} />
                    <label className="form-check-label" htmlFor="radio1">Có</label>
                </div>
                <div className="col-sm form-check">
                    <input ref={inputNoObligateRef} type="radio" className="form-check-input" id="radio2" name="optradio1" onChange={e => e.target.checked ? setObligate(false) : setObligate(true)} />
                    <label className="form-check-label" htmlFor="radio2">Không</label>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-sm">Chọn nhiều</label>
                <div className="col form-check">
                    <input ref={inputYesChooseMultipleRef} type="radio" className="form-check-input" id="radio3" name="optradio2" onChange={e => e.target.checked ? setChooseMultiple(true) : setChooseMultiple(false)} />
                    <label className="form-check-label" htmlFor="radio3">Có</label>
                </div>
                <div className="col-sm form-check">
                    <input ref={inputNoChooseMultipleRef} type="radio" className="form-check-input" id="radio4" name="optradio2" onChange={e => e.target.checked ? setChooseMultiple(false) : setChooseMultiple(true)} />
                    <label className="form-check-label" htmlFor="radio4">Không</label>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-lg-4">Chọn sản phẩm</label>
                {
                    products.map(p =>
                        <div key={p.productId} className="form-check">
                            <input type="checkbox" className="form-check-input" id={p.productId} onChange={e => e.target.checked == true ? setProductIds(id => [...id, p.productId]) : setProductIds(productIds.filter((id) => id != p.productId))} checked={productIds.includes(p.productId)} />
                            <label className="form-check-label" htmlFor={p.productId}>{p.productName}</label>
                        </div>
                    )
                }
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-sm-6" onClick={e => save()}>Lưu</button>
            </div>
        </div>
    )
}