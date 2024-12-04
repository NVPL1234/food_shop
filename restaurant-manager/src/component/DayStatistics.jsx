import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { url } from '../url'

export default function DayStatistics() {

    const user = useSelector((state) => state.user.value)
    const [day, setDay] = useState(0)
    const [firstDay, setFirstDay] = useState('')
    const [lastDay, setLastDay] = useState('')
    const [revenue, setRevenue] = useState([])

    let getRevenue = async () => {
        try {
            let res = await axios.get(url + 'orders/revenue?dayNum=' + day, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
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
                    'Authorization': 'Bearer ' + user.token
                }
            })
            setRevenue(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if (day != 3)
            getRevenue()
    }, [day])

    return (
        <>
            <div className="row mt-3">
                <label htmlFor="day" className="col-2">Chọn ngày</label>
                <select id="day" className="col" value={day} onChange={e => setDay(e.target.value)}>
                    <option value={0}>Hôm nay</option>
                    <option value={30}>30 ngày</option>
                    <option value={3}>Tuỳ chỉnh</option>
                </select>
            </div>
            <div className="row mt-3">
                <label htmlFor='first-day' className="col-2 form-label" hidden={day == 3 ? false : true}>Từ</label>
                <input type='date' className="col" id='first-day' value={firstDay} onChange={e => setFirstDay(e.target.value)} hidden={day == 3 ? false : true} />
                <label htmlFor='last-day' className="col-2 form-label" hidden={day == 3 ? false : true}>Đến</label>
                <input type='date' className="col" id='last-day' value={lastDay} onChange={e => setLastDay(e.target.value)} hidden={day == 3 ? false : true} />
            </div>
            <div className="row mt-3" style={{marginLeft: '16%'}}>
                <button type="button" className="col-2 btn btn-success" onClick={e => getCusRevenue()} hidden={day == 3 ? false : true}>Thống kê</button>
            </div>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={revenue}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 30
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
        </>
    )
}