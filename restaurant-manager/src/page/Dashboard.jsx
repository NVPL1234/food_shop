import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Nav from '../component/Nav'
import { url } from '../url'

export default function Dashboard() {

    const token = useSelector((state) => state.user.value.token)
    const [revenue, setRevenue] = useState([])
    const [totalOrder, setTotalOrder] = useState(0)
    const [totalCustomer, setTotalCustomer] = useState(0)

    let getRevenue = async () => {
        try {
            let res = await axios.get(url + 'orders/revenue?dayNum=' + 0, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setRevenue(res.data)
            res = await axios.get(url + 'orders/count', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            res = await axios.get(url + 'customers/countNewCustomer', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setTotalCustomer(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getRevenue()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div>
                <div>
                    <h5>Doanh thu</h5>
                    <h5>{revenue.length !=0 ? revenue[0].revenue : 0}đ</h5>
                </div>
                <div>
                    <h5>Đơn hàng</h5>
                    <h5>{totalOrder} đơn</h5>
                </div>
                <div>
                    <h5>Khách hàng mới</h5>
                    <h5>{totalCustomer}</h5>
                </div>
            </div>
            <div>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                        width={500}
                        height={300}
                        data={revenue}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="orderDate" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#7aa3e5" name="Tổng tiền" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}