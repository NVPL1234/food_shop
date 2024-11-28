export default function Customer({ customer }) {
    return (
        <>
            <div className="row mt-5" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Mã: </h5>
                <h5 className="col-sm">{customer.customerId}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Họ và tên: </h5>
                <h5 className="col-sm">{customer.customerName}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Số điện thoại: </h5>
                <h5 className="col-sm">{customer.phoneNumber}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%', marginBottom: '20%'}}>
                <h5 className="col-sm-3">Địa chỉ:</h5>
                <h5 className="col-sm">{customer.address}</h5>
            </div>
        </>
    )
}