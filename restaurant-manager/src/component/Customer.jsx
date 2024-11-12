export default function Customer({customer}) {
    return (
        <div>
            <h5>Mã: </h5>
            <h5>{customer.customerId}</h5>
            <h5>Họ và tên: </h5>
            <h5>{customer.customerName}</h5>
            <h5>Số điện thoại: </h5>
            <h5>{customer.phoneNumber}</h5>
            <h5>Địa chỉ:</h5>
            <h5>{customer.address}</h5>
        </div>
    )
}