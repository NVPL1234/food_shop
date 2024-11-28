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
import Products from "../component/Products"

export default function Home() {

    const [productCategories, setProductCategories] = useState([])
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState()
    const [productName, setProductName] = useState('')
    const token = useSelector((state) => state.user.value.token)
    const navigate = useNavigate()

    let getData = async () => {
        try {
            let res = await axios.get(url + "productCategories", {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setProductCategories(res.data)
        } catch (error) {
            navigate("/login")
        }
    }

    let findByProductName = async () => {
        setProductCategories([])
        setProducts([])
        try {
            let res = await axios.get(url + 'products/name?productName=' + productName, {
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
        getData()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <Slide />
            <section className="row mt-3">
                <input type="text" className="col-md txt-product-name" placeholder="Bạn muốn tìm sản phẩm gì?" value={productName} onChange={e => setProductName(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findByProductName()}><TfiSearch /></button>
            </section>
            <section className="row mt-3">
                {
                    products.map((product) =>
                        <div className="col-6 col-sm-3 col-md-3" key={product.productId}>
                            <div className="row product" data-bs-toggle="modal" data-bs-target="#myModal" onClick={e => setProduct(product)}>
                                <img src={product.imgPath} />
                                <h5>{product.productName}</h5>
                                <h6>{product.unitPrice}đ</h6>
                            </div>
                        </div>
                    )
                }
            </section>
            {
                productCategories.map(pc =>
                    <section className="row mt-3" key={pc.productCategoryId}>
                        <h4 style={{textAlign: 'center'}}>--{pc.productCategoryName}--</h4>
                        <Products productCategory={pc} setProduct={setProduct} />
                    </section>
                )
            }
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