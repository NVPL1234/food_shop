import axios from 'axios'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll } from "../redux/cartSlice"
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { IoCheckmark } from "react-icons/io5"
import './PaymentSuccess.css'
import { url } from '../url'

export default function PaymentSuccess() {

    const user = useSelector((state) => state.user.value)
    const carts = useSelector((state) => state.cart.value)
    const dispatch = useDispatch()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const appTransId = queryParams.get('apptransid')

    let save = async () => {
        try {
            let res = await axios.post(url + 'orders', {
                orderId: appTransId,
                orderStatus: 2,
                customer: {
                    customerId: user.userId
                }
            }, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            let orderId = res.data.orderId
            for (let i = 0; i < carts.length; i++) {
                let orderDetailsId = new Date().getTime()
                let options = carts[i].options
                if (options.length == 0)
                    await axios.post(url + 'orderDetails', {
                        id: {
                            orderDetails: orderDetailsId,
                            order: orderId,
                            product: carts[i].product.productId
                        },
                        order: {
                            orderId: orderId
                        },
                        product: {
                            productId: carts[i].product.productId
                        },
                        quantity: carts[i].quantity,
                        unitPriceProduct: carts[i].product.unitPrice,
                        note: carts[i].note
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + user.token
                        }
                    })
                else
                    for (let j = 0; j < options.length; j++)
                        await axios.post(url + 'orderDetails', {
                            id: {
                                orderDetails: orderDetailsId,
                                order: orderId,
                                product: carts[i].product.productId
                            },
                            order: {
                                orderId: orderId
                            },
                            product: {
                                productId: carts[i].product.productId
                            },
                            option: {
                                optionId: options[j].optionId
                            },
                            quantity: carts[i].quantity,
                            unitPriceProduct: carts[i].product.unitPrice,
                            unitPriceOption: options[j].unitPrice,
                            note: carts[i].note
                        }, {
                            headers: {
                                'Authorization': 'Bearer ' + user.token
                            }
                        })
            }
        } catch (error) {
            console.log(error.message);
        }
        dispatch(removeAll())
    }

    useEffect(() => {
        save()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div className='row mt-3 notify'>
                <div className='row'>
                    <IoCheckmark className='col-md-2 col-lg-1 io-checkmark' size={100} color='white' />
                </div>
                <h5 className='mt-3'>Thanh toán thành công!</h5>
                <p>Mã đơn hàng của bạn là <span style={{ color: 'blue' }}>{appTransId}</span></p>
                <p>Bạn có thể xem chi tiết trong đơn hàng của tôi</p>
                <Link to="/" className='col-md-5 btn btn-primary'>TIẾP TỤC MUA HÀNG</Link>
            </div>
            <Footer />
        </div>
    )
}