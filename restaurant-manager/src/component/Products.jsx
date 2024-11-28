import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { url } from "../url";

export default function Products(prop) {

    const productCategory = prop.productCategory
    const setProduct = prop.setProduct
    const token = useSelector((state) => state.user.value.token)
    const [products, setProducts] = useState([])

    let getData = async () => {
        try {
            let res = await axios.get(url + 'products/productCategory?productCategoryId=' + productCategory.productCategoryId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            setProducts(res.data) 
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {
                products.map((product, i) =>
                    <div className="col-6 col-sm-3 col-md-3" key={i}>
                        <div className="row product" data-bs-toggle="modal" data-bs-target="#myModal" onClick={e => setProduct(product)}>
                            <img src={product.imgPath} />
                            <h5>{product.productName}</h5>
                            <h6>{product.unitPrice}đ</h6>
                        </div>
                    </div>
                )
            }
        </>
    )
}