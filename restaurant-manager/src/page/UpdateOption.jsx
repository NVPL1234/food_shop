import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import { TfiSearch } from "react-icons/tfi";
import { GoPencil } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Nav from "../component/Nav"
import Page from "../component/Page"
import OptionForm from '../component/OptionForm'
import "./UpdateProduct.css"

export default function UpdateOption() {

    const token = useSelector((state) => state.user.value.token)
    const [hidden, setHidden] = useState(false)
    const activePage = useSelector((state) => state.activePage.value)
    const [totalPage, setTotalPage] = useState(0)
    const [options, setOptions] = useState([])
    const [option, setOption] = useState(null)
    const [optionId, setOptionId] = useState(0)

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "options?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setOptions(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let findById = async () => {
        try {
            let res = await axios.get(url + "options/id?id=" + optionId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setOptions(res.data)
        } catch (e) {
            alert("Không tìm thấy!")
            setOptions([])
        }
        setHidden(true)
    }

    let deleteById = async (id) => {
        if (!(window.confirm('Bạn có chắc muốn xoá?')))
            return false
        try {
            await axios.delete(url + "options?id=" + id, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            alert('Xoá thành công!')
            getData(activePage - 1)
        } catch (e) {
            console.log(e.message)
        }
    }

    let count = async () => {
        await axios.get(url + "options/count", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                let totalOption = res.data
                let totalPage = Math.ceil(totalOption / 10)
                setTotalPage(totalPage)
            })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        getData(0)
        count()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <button type="button" className="col-md-1 btn btn-primary me-2" onClick={e => setOption(null)} data-bs-toggle="modal" data-bs-target="#myModal">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã khách hàng..." value={optionId} onChange={e => setOptionId(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findById()}><TfiSearch /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã tuỳ chọn</th>
                            <th>Tên tuỳ chọn</th>
                            <th>Đơn giá</th>
                            <th>Loại tuỳ chọn</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            options.map(option =>
                                <tr key={option.optionId}>
                                    <td>{option.optionId}</td>
                                    <td>{option.optionName}</td>
                                    <td>{option.unitPrice}</td>
                                    <td>{option.optionCategory.optionCategoryName}</td>
                                    <td>
                                        <GoPencil className="i-edit" onClick={e => setOption(option)} data-bs-toggle="modal" data-bs-target="#myModal" /> |
                                        <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => deleteById(option.optionId)} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Page totalPage={totalPage} getData={getData} hidden={hidden} />

             <div className="modal" id="myModal">
                <div className="modal-dialog modal-fullscreen-md-down modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Tuỳ chọn</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {option != null ? <OptionForm option={option} getData={getData} /> : <OptionForm getData={getData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}