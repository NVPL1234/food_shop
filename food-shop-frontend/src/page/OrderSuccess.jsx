import { Link, useLocation } from 'react-router-dom'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { IoCheckmark } from "react-icons/io5"
import './PaymentSuccess.css'

export default function OrderSuccess() {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const orderId = queryParams.get('orderId')

    return (
        <div className="container-fluid">
            <Nav />
            <div className='row mt-3 notify'>
                <div className='row'>
                    <IoCheckmark className='col-md-2 col-lg-1 io-checkmark' size={100} color='white' />
                </div>
                <h5 className='mt-3'>Đặt hàng thành công!</h5>
                <p>Mã đơn hàng của bạn là <span style={{ color: 'blue' }}>{orderId}</span></p>
                <p>Bạn có thể xem chi tiết trong <Link to='/order_history'>lịch sử đơn hàng</Link></p>
                <Link to="/" className='col-md-5 btn btn-primary'>TIẾP TỤC MUA HÀNG</Link>
            </div>
            <Footer />
        </div>
    )
}