import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { url } from "../url"

export default function OrderDetails(prop) {

    const token = useSelector((state) => state.user.value.token)
    const orderId = prop.orderId
    const [orderDetails, setOrderDetails] = useState([])
    const [total, setTotal] = useState(0)

    let getData = async () => {
        try {
            let res = await axios.get(url + 'orderDetails?orderId=' + orderId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            let orderDetails = res.data
            let totalOption = orderDetails[0].unitPriceOption
            let amount = 0
            if(orderDetails.length == 1) {
                if(orderDetails[0].optionName != null)
                    orderDetails[0].productName += '<h6>+ ' + orderDetails[0].optionName + ' ' + orderDetails[0].unitPriceOption + '</h6>' 
                orderDetails[0].amount = orderDetails[0].quantity * (orderDetails[0].unitPriceProduct + orderDetails[0].unitPriceOption)
                amount = orderDetails[0].amount
                setOrderDetails(orderDetails)
                setTotal(amount)
            }
            else {
                for(let i=1; i<orderDetails.length; i++) {
                    if(orderDetails[i].orderDetailsId == orderDetails[i-1].orderDetailsId) {
                        totalOption += orderDetails[i].unitPriceOption
                        if(orderDetails.length - i == 1) {
                            orderDetails[i].amount = orderDetails[i].quantity * (orderDetails[i].unitPriceProduct + totalOption)
                            amount += orderDetails[i].amount
                        }
                        orderDetails[i].productName += '<h6>+ ' + orderDetails[i-1].optionName + ' ' + orderDetails[i-1].unitPriceOption + '</h6><h6>+ ' + orderDetails[i].optionName + ' ' + orderDetails[i].unitPriceOption + '</h6>'
                    }
                    else {  
                        orderDetails[i-1].amount = orderDetails[i-1].quantity * (orderDetails[i-1].unitPriceProduct + totalOption)
                        amount += orderDetails[i-1].amount 
                        totalOption = orderDetails[i].unitPriceOption
                        if(orderDetails[i].optionName != null)
                            orderDetails[i-1].productName += '<h6>+ ' + orderDetails[i-1].optionName + ' ' + orderDetails[i-1].unitPriceOption + '</h6>'
                        if(orderDetails.length - i == 1) {
                            orderDetails[i].amount = orderDetails[i].quantity * (orderDetails[i].unitPriceProduct + totalOption)
                            amount += orderDetails[i].amount
                        }                            
                    }
                }
                setOrderDetails(orderDetails)
                setTotal(amount)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData()
    }, [orderId])

    return (
        <div className="modal" id="myModal">
            <div className="modal-dialog modal-fullscreen-md-down modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Chi tiết</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <div className="table-responsive-md">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá sản phẩm</th>                                    
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                       orderDetails.map((od, i) => 
                                        od.amount == null ? '' :
                                            <tr key={i}>
                                                <td dangerouslySetInnerHTML={{ __html: od.productName }}></td>
                                                <td>{od.quantity}</td>
                                                <td>{od.unitPriceProduct}</td>
                                                <td>{od.amount}</td>
                                            </tr>
                                       )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <h5>Tổng tiền: {total}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}