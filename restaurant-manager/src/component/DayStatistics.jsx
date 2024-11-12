import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { url } from '../url'

export default function DayStatistics() {

    const token = useSelector((state) => state.user.value.token)
    const [day, setDay] = useState(0)
    const [firstDay, setFirstDay] = useState('')
    const [lastDay, setLastDay] = useState('')
    const [revenue, setRevenue] = useState([])

    let getRevenue = async () => {
        try {
            let res = await axios.get(url + 'orders/revenue?dayNum=' + day, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setRevenue(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let getCusRevenue = async () => {
        try {
            let res = await axios.get(url + 'orders/cus_revenue?firstDay=' + firstDay + '&lastDay=' + lastDay, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })   
            setRevenue(res.data)   
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if(day != 3)
            getRevenue()
    }, [day])

    return (
        <div>
            <label htmlFor="day">Chọn ngày</label>
            <select id="day" value={day} onChange={e => setDay(e.target.value)}>
                <option value={0}>Hôm nay</option>
                <option value={30}>30 ngày</option>
                <option value={3}>Tuỳ chỉnh</option>
            </select>
            <label htmlFor='first-day' className="form-label" hidden={day == 3 ? false : true}>Từ</label>
            <input type='date' className="form-control" id='first-day' value={firstDay} onChange={e => setFirstDay(e.target.value)} hidden={day == 3 ? false : true} />
            <label htmlFor='last-day' className="form-label" hidden={day == 3 ? false : true}>Đến</label>
            <input type='date' className="form-control" id='last-day' value={lastDay} onChange={e => setLastDay(e.target.value)} hidden={day == 3 ? false : true} />
            <button type="button" className="btn btn-success" onClick={e => getCusRevenue()} hidden={day == 3 ? false : true}>Thống kê</button>
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
    )
}