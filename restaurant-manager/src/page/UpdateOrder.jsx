import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import { socket } from '../socket'
import Nav from '../component/Nav'
import OrderDetails from "../component/OrderDetails"
import "./UpdateProduct.css"

export default function UpdateOrder() {

    const user = useSelector((state) => state.user.value)
    const [day, setDay] = useState(new Date().toJSON().slice(0, 10))
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState('')

    let getData = async () => {
        try {
            let res = await axios.get(url + 'orders/date?orderDate=' + day, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setOrders(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let handleStatus = (status) => {
        switch (status) {
            case 1:
                return 'Đã đặt'
            case 2:
                return 'Đã thanh toán'
            case 3:
                return 'Đang vận chuyển'
            case 4:
                return 'Đã nhận'
            case 5:
                return 'Đã huỷ'
            default:
                break
        }
    }

    let updateStatus = async (order, status) => {
        if (status !== 5) {
            if (order.orderStatus < 3)
                status = 3
            else if (order.orderStatus < 4)
                status = 4
        }
        try {
            await axios.post(url + 'orders', {
                orderId: order.orderId,
                orderDate: order.orderDate,
                orderStatus: status,
                customer: order.customer
            }, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        socket.connect()
        socket.on("update", getData)
        getData()
        return () => {
            socket.off('update', getData)
            socket.disconnect()
        }
    }, [day])

    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-5">
                <label htmlFor="day" className="col-2">Chọn ngày</label>
                <input type='date' className="col" id='day' value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="row mt-4 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã hoá đơn</th>
                            <th>Ngày đặt hàng</th>
                            <th>Trạng thái</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order.orderId}>
                                    <td>{order.orderId}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{handleStatus(order.orderStatus)}</td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={e => updateStatus(order, 0)} disabled={order.orderStatus >= 4 ? true : false}>{order.orderStatus < 3 ? 'Chấp nhận' : 'Hoàn tất'}</button> | &nbsp;
                                        <button type="button" className="btn btn-danger" onClick={e => updateStatus(order, 5)} disabled={order.orderStatus > 3 ? true : false}>Huỷ</button> | &nbsp;
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={e => setOrderId(order.orderId)}>Xem chi tiết</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <OrderDetails orderId={orderId} />
        </div>
    )
}