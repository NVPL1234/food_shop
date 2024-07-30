import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/pageNumberSlice'
import axios from "axios"
import { url } from "../url"
import Nav from "../component/Nav"
import { LuRefreshCw } from "react-icons/lu"
import { TfiSearch } from "react-icons/tfi"
import { GoPencil } from "react-icons/go"
import { MdOutlineDeleteOutline } from "react-icons/md"
import "./UpdateProduct.css"
import Page from "../component/Page"

export default function UpdateProduct() {

    const [products, setProducts] = useState([])
    // const [pageNumber, setPageNumber] = useState(0)
    const pageNumber = useSelector((state) => state.pageNumber.value)
    const token = useSelector((state) => state.user.value.token)
    const dispatch = useDispatch()

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "products?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setProducts(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData(pageNumber)
    }, [pageNumber])

    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <button type="button" className="col-md-1 btn btn-primary me-2">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã sản phẩm..." />
                <button type="button" className="col-md-1 btn btn-success me-2"><TfiSearch /></button>
                <button type="button" className="col-md-1 btn btn-warning"><LuRefreshCw color="white" /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình</th>
                            <th>Tên sản phẩm</th>
                            <th>Loại sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Đơn vị</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td><img src={product.imgPath} alt="" width="10%" /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategory.productCategoryName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.unit}</td>
                                    <td><GoPencil className="i-edit" onClick={e => alert('edit')} /> | <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Page/>
        </div>
    )
}