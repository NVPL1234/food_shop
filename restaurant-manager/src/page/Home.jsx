import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import Nav from "../component/Nav"
import Slide from "../component/Slide"
import FormOrder from "../component/FormOrder"
import Footer from "../component/Footer"
import { TfiSearch } from "react-icons/tfi"
import { url } from "../url"
import "./Home.css"

export default function Home() {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState()
    const token = useSelector((state) => state.user.value.token)
    const navigate = useNavigate()

    let getData = async () => {
        await axios.get(url + "productAndProductCategoies", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => setProducts(res.data))
            .catch(e => navigate("/login"))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <Slide />
            <section className="row mt-3">
                <input type="text" className="col-md txt-product-name" placeholder="Bạn muốn tìm sản phẩm gì?" />
                <button type="button" className="col-md-1 btn btn-success me-2"><TfiSearch /></button>
            </section>
            <section className="row mt-3">
                {
                    products.map((product, i, arr) =>
                        <div className="col-6 col-sm-3 col-md-3" key={i}>
                            {i == 0 ? <h5 className="row">{product.productCategoryName}</h5> : (arr[i - 1].productCategoryName != product.productCategoryName ? <h5 className="row">{product.productCategoryName}</h5> : <h5 className="row" style={{visibility: 'hidden'}}>.</h5>)}
                            <div className="row product" data-bs-toggle="modal" data-bs-target="#myModal" onClick={e => setProduct(product)}>
                                <img src={product.imgPath} />
                                <h5>{product.productName}</h5>
                                <h6>{product.unitPrice}đ</h6>
                            </div>
                        </div>
                    )
                }
            </section>
            <Footer />

            <div className="modal" id="myModal">
                <div className="modal-dialog modal-fullscreen-md-down modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Đặt món</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {product != null && <FormOrder product={product} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}