export default function Employee({ employee }) {
    return (
        <>
            <div className="row mt-5" style={{justifyContent: 'center'}}>
                <img src={employee.imgPath} className="col-sm-2" alt="" />
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Mã</h5>
                <h5 className="col-sm">{employee.employeeId}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Họ và tên</h5>
                <h5 className="col-sm">{employee.employeeName}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Số điện thoại</h5>
                <h5 className="col-sm">{employee.phoneNumber}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Địa chỉ</h5>
                <h5 className="col-sm">{employee.address}</h5>
            </div>
            <div className="row mt-3" style={{marginLeft: '40%'}}>
                <h5 className="col-sm-3">Số CMND/CCCD</h5>
                <h5 className="col-sm">{employee.idCardNumber}</h5>
            </div>
        </>
    )
}