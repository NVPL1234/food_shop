import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"

export default function ProductCategoryForm(prop) {

    const productCategory = prop.productCategory
    const getData = prop.getData
    const user = useSelector((state) => state.user.value)
    const activePage = useSelector((state) => state.activePage.value)
    const [productCategoryName, setProductCategoryName] = useState('')

    let save = async () => {
        try {
            await axios.post(url + 'productCategories', {
                productCategoryId: productCategory != null ? productCategory.productCategoryId : 0,
                productCategoryName: productCategoryName
            }, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
        } catch (error) {
            console.log(error.message);
        }
        getData(activePage - 1)
        console.log('save success!');
    }

    let refresh = () => {
        if (productCategory != null) {
            setProductCategoryName(productCategory.productCategoryName)
        }
        else {
            setProductCategoryName('')
        }
    }

    useEffect(() => {
        refresh()
    }, [productCategory])

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <label htmlFor="" className="col">Tên loại sản phẩm</label>
                <input type="text" className="col" id="" placeholder="Tên loại sản phẩm..." value={productCategoryName} onChange={e => setProductCategoryName(e.target.value)} />
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-6" onClick={e => save()}>Lưu</button>
            </div>
        </div>
    )
}