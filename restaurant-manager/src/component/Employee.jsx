export default function Employee({ employee }) {
    return (
        <div className="row mt-3" style={{ backgroundColor: 'white', justifyContent: 'center', padding: '1%' }}>
            <img src={employee.imgPath} alt="" style={{width: '250px'}} />
            <h5 className="mt-3" style={{textAlign: 'center'}}>Mã</h5>
            <h6 style={{textAlign: 'center'}}>{employee.employeeId}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Họ và tên</h5>
            <h6 style={{textAlign: 'center'}}>{employee.employeeName}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Số điện thoại</h5>
            <h6 style={{textAlign: 'center'}}>{employee.phoneNumber}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Địa chỉ</h5>
            <h6 style={{textAlign: 'center'}}>{employee.address}</h6>
            <h5 className="mt-3" style={{textAlign: 'center'}}>Số CMND/CCCD</h5>
            <h6 style={{textAlign: 'center'}}>{employee.idCardNumber}</h6>
        </div>
    )
}