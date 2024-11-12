import { useState } from 'react'
import Nav from '../component/Nav'
import DayStatistics from '../component/DayStatistics'

export default function RevenueStatistics() {

    const [type, setType] = useState(1)

    return (
        <div className="container-fluid">
            <Nav></Nav>
            <label htmlFor="type">Chọn loại thống kê</label>
            <select id="type" value={type} onChange={e => setType(e.target.value)}>
                <option value={1}>Ngày</option>
                <option value={2}>Tháng</option>
                <option value={3}>Năm</option>
            </select>
            {type == 1 && <DayStatistics />}
        </div>
    )
}