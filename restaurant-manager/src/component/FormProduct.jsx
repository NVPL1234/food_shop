import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormProduct(prop) {

    const product = prop.product
    const getData = prop.getData
    const token = useSelector((state) => state.user.value.token)
    const activePage = useSelector((state) => state.activePage.value)
    const [img, setImg] = useState(null)
    const [imgPath, setImgPath] = useState('')
    const inputFileRef = useRef(null)
    const [productName, setProductName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [unitPrice, setUnitPrice] = useState(0)
    const [unit, setUnit] = useState('')
    const [productCategoryId, setProductCategoryId] = useState(1)
    const [productCategories, setProductCategories] = useState([])
    const storage = getStorage();

    let onChangeFile = (e) => {
        let file = e.target.files[0]
        setImg(file)
        setImgPath(URL.createObjectURL(file))

    }

    let saveImg = async () => {
        if (img != null) {
            const storageRef = ref(storage, 'img/' + img.name);
            console.log("uploading...");
            await uploadBytes(storageRef, img, { contentType: img.type }).then((snapshot) => {
                console.log('upload success!');
            });
            console.log('saving...');
            getDownloadURL(storageRef)
                .then(async (imgPath) => {
                    console.log(imgPath);
                    try {
                        await axios.post(url + 'products', {
                            productId: product != null ? product.productId : 0,
                            imgPath: imgPath,
                            productName: productName,
                            quantity: quantity,
                            unitPrice: unitPrice,
                            unit: unit,
                            productCategory: {
                                productCategoryId: productCategoryId
                            }
                        }, {
                            headers: {
                                'Authorization': 'Bearer ' + token
                            }
                        })
                    } catch (error) {
                        console.log(error.message);
                    }
                })
                .catch((error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                    }
                });
        }
        else {
            try {
                await axios.post(url + 'products', {
                    productId: product != null ? product.productId : 0,
                    imgPath: imgPath,
                    productName: productName,
                    quantity: quantity,
                    unitPrice: unitPrice,
                    unit: unit,
                    productCategory: {
                        productCategoryId: productCategoryId
                    }
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
            } catch (error) {
                console.log(error.message);
            }
        }
        getData(activePage - 1)
        console.log('save success!');
    }

    let refresh = async () => {
        try {
            let res = await axios.get(url + 'productCategories', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setProductCategories(res.data)
            if (product != null) {
                setImgPath(product.imgPath)
                setProductName(product.productName)
                setQuantity(product.quantity)
                setUnitPrice(product.unitPrice)
                setUnit(product.unit)
                setProductCategoryId(product.productCategory.productCategoryId)
            }
            else {
                setImgPath('')
                setProductName('')
                setQuantity(1)
                setUnitPrice(0)
                setUnit('')
                setProductCategoryId(res.data[0].productCategoryId)
            }
            inputFileRef.current.value = ''
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        refresh()
    }, [product])

    return (
        <div className="container-fluid">
            <div className="row">
                <img src={imgPath} alt="" />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Chọn hình</label>
                <input ref={inputFileRef} type="file" className="col" id="" onChange={e => onChangeFile(e)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Tên sản phẩm</label>
                <input type="text" className="col" id="" placeholder="Tên sản phẩm..." value={productName} onChange={e => setProductName(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Loại sản phẩm</label>
                <select className="col" id="" value={productCategoryId} onChange={e => setProductCategoryId(e.target.value)}>
                    {
                        productCategories.map(productCategory =>
                            <option key={productCategory.productCategoryId} value={productCategory.productCategoryId}>{productCategory.productCategoryName}</option>
                        )
                    }
                </select>
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Đơn giá</label>
                <input type="number" className="col" id="" placeholder="Đơn giá..." value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Số lượng</label>
                <input type="number" className="col" id="" placeholder="Số lượng..." value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Đơn vị</label>
                <input type="text" className="col" id="" placeholder="Đơn vị..." value={unit} onChange={e => setUnit(e.target.value)} />
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-6" onClick={e => saveImg()}>Lưu</button>
            </div>
        </div>
    )
}