export default function Employee({employee}) {
    return (
        <div>
            <img src={employee.imgPath} alt="" />
            <h5>Mã: </h5>
            <h5>{employee.employeeId}</h5>
            <h5>Họ và tên: </h5>
            <h5>{employee.employeeName}</h5>
            <h5>Số điện thoại: </h5>
            <h5>{employee.phoneNumber}</h5>
            <h5>Địa chỉ: </h5>
            <h5>{employee.address}</h5>
            <h5>Số CMND/CCCD: </h5>
            <h5>{employee.idCardNumber}</h5>
        </div>
    )
}