export default function Customer({ customer }) {
    return (
        <div className="row mt-5" style={{ backgroundColor: 'white', justifyContent: 'center', padding: '3%', marginBottom: '3%' }}>
            <h5 style={{textAlign: 'center'}}>Mã: </h5>
            <h6 style={{textAlign: 'center'}}>{customer.customerId}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Họ và tên: </h5>
            <h6 style={{textAlign: 'center'}}>{customer.customerName}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Số điện thoại: </h5>
            <h6 style={{textAlign: 'center'}}>{customer.phoneNumber}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Địa chỉ:</h5>
            <h6 style={{textAlign: 'center'}}>{customer.address}</h6>
        </div>
    )
}