import axios from 'axios'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Nav from '../component/Nav'
import { socket } from '../socket'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { url } from '../url'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value)
    const [revenue, setRevenue] = useState([])
    const [totalOrder, setTotalOrder] = useState(0)
    const [totalCustomer, setTotalCustomer] = useState(0)

    let getData = async () => {
        try {
            let res = await axios.get(url + 'orders/revenue?dayNum=' + 0, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setRevenue(res.data)
            res = await axios.get(url + 'orders/count', {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setTotalOrder(res.data)
            res = await axios.get(url + 'customers/countNewCustomer', {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setTotalCustomer(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if(user.token == '')
            navigate('/login')
        else {
            socket.connect()
            socket.on("add", getData)
            getData()
            return () => {
                socket.off('add', getData)
                socket.disconnect()
            }
        }
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div className='row'>
                <div className='col-sm statistics'>
                    <h5>Doanh thu</h5>
                    <h5>{revenue.length !=0 ? revenue[0].revenue : 0}đ</h5>
                </div>
                <div className='col-sm statistics'>
                    <h5>Đơn hàng</h5>
                    <h5>{totalOrder} đơn</h5>
                </div>
                <div className='col-sm statistics'>
                    <h5>Khách hàng mới</h5>
                    <h5>{totalCustomer}</h5>
                </div>
            </div>
            <div className='row mt-4'>
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