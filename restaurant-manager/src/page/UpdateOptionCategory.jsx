import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import { TfiSearch } from "react-icons/tfi";
import { GoPencil } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Nav from "../component/Nav"
import Page from "../component/Page"
import OptionCategoryForm from '../component/OptionCategoryForm'
import "./UpdateProduct.css"

export default function UpdateOptionCategory() {

    const token = useSelector((state) => state.user.value.token)
    const [hidden, setHidden] = useState(false)
    const activePage = useSelector((state) => state.activePage.value)
    const [totalPage, setTotalPage] = useState(0)
    const [optionCategories, setOptionCategories] = useState([])
    const [optionCategory, setOptionCategory] = useState(null)
    const [optionCategoryId, setOptionCategoryId] = useState(0)

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "optionCategories?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setOptionCategories(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let findById = async () => {
        setOptionCategories([])
        try {
            let res = await axios.get(url + "optionCategories/id?id=" + optionCategoryId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setOptionCategories(oc => [...oc, res.data])
        } catch (e) {
            alert("Không tìm thấy!")
        }
        setHidden(true)
    }

    let deleteById = async (id) => {
        if (!(window.confirm('Bạn có chắc muốn xoá?')))
            return false
        try {
            await axios.delete(url + "optionCategories?id=" + id, {
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
        await axios.get(url + "optionCategories/count", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                let totalOptionCategory = res.data
                let totalPage = Math.ceil(totalOptionCategory / 10)
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
                <button type="button" className="col-md-1 btn btn-primary me-2" onClick={e => setOptionCategory(null)} data-bs-toggle="modal" data-bs-target="#myModal">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã khách hàng..." value={optionCategoryId} onChange={e => setOptionCategoryId(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findById()}><TfiSearch /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã loại tuỳ chọn</th>
                            <th>Tên loại tuỳ chọn</th>
                            <th>Bắt buộc</th>
                            <th>Chọn nhiều</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            optionCategories.map(optionCategory =>
                                <tr key={optionCategory.optionCategoryId}>
                                    <td>{optionCategory.optionCategoryId}</td>
                                    <td>{optionCategory.optionCategoryName}</td>
                                    <td>{optionCategory.obligate ? 'Có' : 'Không'}</td>
                                    <td>{optionCategory.chooseMultiple ? 'Có' : 'Không'}</td>
                                    <td>
                                        <GoPencil className="i-edit" onClick={e => setOptionCategory(optionCategory)} data-bs-toggle="modal" data-bs-target="#myModal" /> |
                                        <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => deleteById(optionCategory.optionCategoryId)} />
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
                            <h4 className="modal-title">Loại tuỳ chọn</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {optionCategory != null ? <OptionCategoryForm optionCategory={optionCategory} getData={getData} /> : <OptionCategoryForm getData={getData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}