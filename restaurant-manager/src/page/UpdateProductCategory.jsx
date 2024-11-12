import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import { TfiSearch } from "react-icons/tfi";
import { GoPencil } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Nav from "../component/Nav"
import Page from "../component/Page"
import ProductCategoryForm from "../component/ProductCategoryForm"
import "./UpdateProduct.css"

export default function UpdateProductCategory() {

    const token = useSelector((state) => state.user.value.token)
    const [hidden, setHidden] = useState(false)
    const activePage = useSelector((state) => state.activePage.value)
    const [totalPage, setTotalPage] = useState(0)
    const [productCategories, setProductCategories] = useState([])
    const [productCategory, setProductCategory] = useState(null)
    const [productCategoryId, setProductCategoryId] = useState(0)

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "productCategories?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setProductCategories(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let findById = async () => {
        setProductCategories([])
        try {
            let res = await axios.get(url + "productCategories/id?id=" + productCategoryId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setProductCategories(pc => [...pc, res.data])
        } catch (e) {
            alert("Không tìm thấy!")
        }
        setHidden(true)
    }

    let deleteById = async (id) => {
        if (!(window.confirm('Bạn có chắc muốn xoá?')))
            return false
        try {
            await axios.delete(url + "productCategories?id=" + id, {
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
        await axios.get(url + "productCategories/count", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                let totalProductCategory = res.data
                let totalPage = Math.ceil(totalProductCategory / 10)
                setTotalPage(totalPage)
            })
    }

    useEffect(() => {
        getData(0)
        count()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <button type="button" className="col-md-1 btn btn-primary me-2" onClick={e => setProductCategory(null)} data-bs-toggle="modal" data-bs-target="#myModal">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã loại sản phẩm..." value={productCategoryId} onChange={e => setProductCategoryId(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findById()}><TfiSearch /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã loại sản phẩm</th>
                            <th>Tên loại sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productCategories.map(productCategory =>
                                <tr key={productCategory.productCategoryId}>
                                    <td>{productCategory.productCategoryId}</td>
                                    <td>{productCategory.productCategoryName}</td>
                                    <td>
                                        <GoPencil className="i-edit" onClick={e => setProductCategory(productCategory)} data-bs-toggle="modal" data-bs-target="#myModal" /> |
                                        <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => deleteById(productCategory.productCategoryId)} />
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
                            <h4 className="modal-title">Loại sản phẩm</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {productCategory != null ? <ProductCategoryForm productCategory={productCategory} getData={getData} /> : <ProductCategoryForm getData={getData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}