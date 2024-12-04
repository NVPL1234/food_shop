import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import Nav from "../component/Nav"
import { TfiSearch } from "react-icons/tfi"
import { GoPencil } from "react-icons/go"
import { MdOutlineDeleteOutline } from "react-icons/md"
import "./UpdateProduct.css"
import Page from "../component/Page"
import FormProduct from "../component/FormProduct"
import { getStorage, ref, deleteObject } from "firebase/storage";

export default function UpdateProduct() {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    const [productId, setProductId] = useState("")
    const [totalPage, setTotalPage] = useState(0)
    const [hidden, setHidden] = useState(false)
    const user = useSelector((state) => state.user.value)
    const activePage = useSelector((state) => state.activePage.value)
    const storage = getStorage();

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "products?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setProducts(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let findById = async (id) => {
        setProducts([])
        try {
            let res = await axios.get(url + "products/id?id=" + id, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setProducts(p => [...p, res.data])
        } catch (e) {
            alert("Không tìm thấy!")
        }
        setHidden(true)
    }

    let deleteById = async (product) => {
        if (!(window.confirm('Bạn có chắc muốn xoá?')))
            return false
        try {
            await axios.delete(url + "products?id=" + product.productId, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            alert('Xoá thành công!')
            getData(activePage - 1)
            const desertRef = ref(storage, product.imgPath);
            deleteObject(desertRef).then(() => {
                console.log('Đã xoá storage!');
            }).catch((error) => {
                console.log('Lỗi không có hình trên storage: ' + error);
            });
        } catch (e) {
            console.log(e.message)
        }
    }

    let count = async () => {
        await axios.get(url + "products/count", {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
            .then(res => {
                let totalProduct = res.data
                let totalPage = Math.ceil(totalProduct / 10)
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
                <button type="button" className="col-md-1 btn btn-primary me-2" onClick={e => setProduct(null)} data-bs-toggle="modal" data-bs-target="#myModal">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã sản phẩm..." value={productId} onChange={e => setProductId(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findById(productId)}><TfiSearch /></button>
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
                                    <td>
                                        <GoPencil className="i-edit" onClick={e => setProduct(product)} data-bs-toggle="modal" data-bs-target="#myModal" /> |
                                        <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => deleteById(product)} />
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
                            <h4 className="modal-title">Sản phẩm</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {product != null ? <FormProduct product={product} getData={getData} /> : <FormProduct getData={getData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}