import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import { TfiSearch } from "react-icons/tfi";
import { GoPencil } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Nav from "../component/Nav"
import Page from "../component/Page"
import EmployeeForm from '../component/EmployeeForm'
import { getStorage, ref, deleteObject } from "firebase/storage";
import "./UpdateProduct.css"

export default function UpdateEmployee() {

    const [totalPage, setTotalPage] = useState(0)
    const [hidden, setHidden] = useState(false)
    const token = useSelector((state) => state.user.value.token)
    const activePage = useSelector((state) => state.activePage.value)
    const [employees, setEmployees] = useState([])
    const [employee, setEmployee] = useState(null)
    const [employeeId, setEmployeeId] = useState(0)
    const storage = getStorage();

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "employees?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setEmployees(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let findById = async () => {
        setEmployee([])
        try {
            let res = await axios.get(url + "employees/id?id=" + employeeId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setEmployee(e => [...e, res.data])
        } catch (e) {
            alert("Không tìm thấy!")
        }
        setHidden(true)
    }

    let deleteById = async (employee) => {
        if (!(window.confirm('Bạn có chắc muốn xoá?')))
            return false
        try {
            await axios.delete(url + "employees?id=" + employee.employeeId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            alert('Xoá thành công!')
            getData(activePage - 1)
            const desertRef = ref(storage, employee.imgPath);
            deleteObject(desertRef).then(() => {
                console.log('Đã xoá storage!');
            }).catch((error) => {
                console.log('Lỗi không có hình trên storage: ' + error);
            });
        } catch (e) {
            console.log(e.message)
        }
    }

    let count = async () => {
        await axios.get(url + "employees/count", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                let totalEmployee = res.data
                let totalPage = Math.ceil(totalEmployee / 10)
                setTotalPage(totalPage)

            })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        getData(0)
        count()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <button type="button" className="col-md-1 btn btn-primary me-2" onClick={e => setEmployee(null)} data-bs-toggle="modal" data-bs-target="#myModal">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã nhân viên..." value={employeeId} onChange={e => setEmployeeId(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findById()}><TfiSearch /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã nhân viên</th>
                            <th>Hình</th>
                            <th>Tên nhân viên</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Số CMND/CCCD</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>
                                <tr key={employee.employeeId}>
                                    <td>{employee.employeeId}</td>
                                    <td><img src={employee.imgPath} alt="" width="10%" /></td>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.phoneNumber}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.idCardNumber}</td>
                                    <td>
                                        <GoPencil className="i-edit" onClick={e => setEmployee(employee)} data-bs-toggle="modal" data-bs-target="#myModal" /> |
                                        <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => deleteById(employee)} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Page totalPage={totalPage} getData={getData} hidden={hidden} />

            <div className="modal" id="myModal">
                <div className="modal-dialog modal-fullscreen-md-down modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sản phẩm</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {employee != null ? <EmployeeForm employee={employee} getData={getData} /> : <EmployeeForm getData={getData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}