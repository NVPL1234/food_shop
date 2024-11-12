import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import { url } from "../url"
import { TfiSearch } from "react-icons/tfi";
import { GoPencil } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Nav from "../component/Nav"
import Page from "../component/Page"
import CustomerForm from '../component/CustomerForm'
import "./UpdateProduct.css"

export default function UpdateCustomer() {

    const token = useSelector((state) => state.user.value.token)
    const [hidden, setHidden] = useState(false)
    const activePage = useSelector((state) => state.activePage.value)
    const [totalPage, setTotalPage] = useState(0)
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState(null)
    const [customerId, setCustomerId] = useState(0)

    let getData = async (pageNumber) => {
        try {
            let res = await axios.get(url + "customers?pageNumber=" + pageNumber, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setCustomers(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    let findById = async () => {
        setCustomers([])
        try {
            let res = await axios.get(url + "customers/id?customerId=" + customerId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setCustomers(c => [...c, res.data])
        } catch (e) {
            alert("Không tìm thấy!")            
        }
        setHidden(true)
    }

    let deleteById = async (id) => {
        if (!(window.confirm('Bạn có chắc muốn xoá?')))
            return false
        try {
            await axios.delete(url + "customers?id=" + id, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            alert('Xoá thành công!')
            getData(activePage - 1)
        } catch (e) {
            console.log(e.message)
        }
    }

    let count = async () => {
        await axios.get(url + "customers/count", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                let totalCustomer = res.data
                let totalPage = Math.ceil(totalCustomer / 10)
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
                <button type="button" className="col-md-1 btn btn-primary me-2" onClick={e => setCustomer(null)} data-bs-toggle="modal" data-bs-target="#myModal">THÊM</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã khách hàng..." value={customerId} onChange={e => setCustomerId(e.target.value)} />
                <button type="button" className="col-md-1 btn btn-success me-2" onClick={e => findById()}><TfiSearch /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer =>
                                <tr key={customer.customerId}>
                                    <td>{customer.customerId}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.address}</td>
                                    <td>
                                        <GoPencil className="i-edit" onClick={e => setCustomer(customer)} data-bs-toggle="modal" data-bs-target="#myModal" /> |
                                        <MdOutlineDeleteOutline size={25} className="i-delete" data-bs-toggle="tooltip" title="Xoá" onClick={e => deleteById(customer.customerId)} />
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
                            <h4 className="modal-title">Khách hàng</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            {customer != null ? <CustomerForm customer={customer} getData={getData} /> : <CustomerForm getData={getData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}