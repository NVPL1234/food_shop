import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"

export default function OptionCategoryForm(prop) {

    const optionCategory = prop.optionCategory
    const getData = prop.getData
    const token = useSelector((state) => state.user.value.token)
    const activePage = useSelector((state) => state.activePage.value)
    const [optionCategoryName, setOptionCategoryName] = useState('')
    const [obligate, setObligate] = useState(true)
    const [chooseMultiple, setChooseMultiple] = useState(true)
    const inputYesObligateRef = useRef(null)
    const inputNoObligateRef = useRef(null)
    const inputYesChooseMultipleRef = useRef(null)
    const inputNoChooseMultipleRef = useRef(null)

    let save = async () => {
        try {
            await axios.post(url + 'optionCategories', {
                optionCategoryId: optionCategory != null ? optionCategory.optionCategoryId : 0,
                optionCategoryName: optionCategoryName,
                obligate: obligate,
                chooseMultiple: chooseMultiple
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

    let refresh = () => {
        if (optionCategory != null) {
            setOptionCategoryName(optionCategory.optionCategoryName)
            setObligate(optionCategory.obligate)
            setChooseMultiple(optionCategory.chooseMultiple)
            optionCategory.obligate ? inputYesObligateRef.current.checked = true : inputNoObligateRef.current.checked = true
            optionCategory.chooseMultiple ? inputYesChooseMultipleRef.current.checked = true : inputNoChooseMultipleRef.current.checked = true
        }
        else {
            setOptionCategoryName('')
            setObligate(true)
            setChooseMultiple(true)
            inputYesObligateRef.current.checked = true
            inputYesChooseMultipleRef.current.checked = true 
        }
    }

    useEffect(() => {
        refresh()
    }, [optionCategory])

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <label htmlFor="" className="col">Tên tuỳ chọn</label>
                <input type="text" className="col" id="" placeholder="Tên tuỳ chọn..." value={optionCategoryName} onChange={e => setOptionCategoryName(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label className="col">Bắt buộc</label>
                <div className="col form-check">
                    <input ref={inputYesObligateRef} type="radio" className="form-check-input" id="radio1" name="optradio1" onChange={e => e.target.checked ? setObligate(true) : setObligate(false)} />
                    <label className="form-check-label" htmlFor="radio1">Có</label>
                </div>
                <div className="col form-check">
                    <input ref={inputNoObligateRef} type="radio" className="form-check-input" id="radio2" name="optradio1" onChange={e => e.target.checked ? setObligate(false) : setObligate(true)} />
                    <label className="form-check-label" htmlFor="radio2">Không</label>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col">Chọn nhiều</label>
                <div className="col form-check">
                    <input ref={inputYesChooseMultipleRef} type="radio" className="form-check-input" id="radio3" name="optradio2" onChange={e => e.target.checked ? setChooseMultiple(true) : setChooseMultiple(false)} />
                    <label className="form-check-label" htmlFor="radio3">Có</label>
                </div>
                <div className="col form-check">
                    <input ref={inputNoChooseMultipleRef} type="radio" className="form-check-input" id="radio4" name="optradio2" onChange={e => e.target.checked ? setChooseMultiple(false) : setChooseMultiple(true)} />
                    <label className="form-check-label" htmlFor="radio4">Không</label>
                </div>
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-6" onClick={e => save()}>Lưu</button>
            </div>
        </div>
    )
}