import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"

export default function OptionForm(prop) {

    const option = prop.option
    const getData = prop.getData
    const token = useSelector((state) => state.user.value.token)
    const activePage = useSelector((state) => state.activePage.value)
    const [optionName, setOptionName] = useState('')
    const [unitPrice, setUnitPrice] = useState(0)
    const [optionCategories, setOptionCategories] = useState([])
    const [optionCategoryId, setOptionCategoryId] = useState(0)

    let save = async () => {
        try {
            await axios.post(url + 'options', {
                optionId: option != null ? option.optionId : 0,
                optionName: optionName,
                unitPrice: unitPrice,
                optionCategory: {
                    optionCategoryId: optionCategoryId
                }
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
        } catch (error) {
            console.log(error.message);
        }
        getData(activePage - 1)
        console.log('save success!');
    }

    let refresh = async () => {
        try {
            let res = await axios.get(url + 'optionCategories', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setOptionCategories(res.data)
            if (option != null) {
                setOptionName(option.optionName)
                setUnitPrice(option.unitPrice)
                setOptionCategoryId(option.optionCategory.optionCategoryId)
            }
            else {
                setOptionName('')
                setUnitPrice(0)
                setOptionCategoryId(res.data[0].optionCategoryId)
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        refresh()
    }, [option])

    return (
        <div className="container-fluid">
            <div className="row">
                <label htmlFor="" className="col">Tên tuỳ chọn</label>
                <input type="text" className="col" id="" placeholder="Tên tuỳ chọn..." value={optionName} onChange={e => setOptionName(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Đơn giá</label>
                <input type="text" className="col" id="" placeholder="Đơn giá..." value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Loại tuỳ chọn</label>
                <select className="col" id="" value={optionCategoryId} onChange={e => setOptionCategoryId(e.target.value)}>
                    {
                        optionCategories.map(optionCategory =>
                            <option key={optionCategory.optionCategoryId} value={optionCategory.optionCategoryId}>{optionCategory.optionCategoryName}</option>
                        )
                    }
                </select>
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-6" onClick={e => save()}>Lưu</button>
            </div>
        </div>
    )
}