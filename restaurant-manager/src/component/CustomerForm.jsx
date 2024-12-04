import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"

export default function CustomerForm(prop) {

    const customer = prop.customer
    const getData = prop.getData
    const user = useSelector((state) => state.user.value)
    const activePage = useSelector((state) => state.activePage.value)
    const [customerName, setCustomerName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    let save = async () => {
        try {
            await axios.post(url + 'customers', {
                customerId: customer != null ? customer.customerId : null,
                customerName: customerName,
                phoneNumber: phoneNumber,
                address: address,
                createDate: customer != null ? customer.createDate : new Date().toISOString()
            }, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
        } catch (error) {
            console.log(error.message);
        }
        getData(activePage - 1)
        console.log('save success!');
    }

    let refresh = () => {
        if (customer != null) {
            setCustomerName(customer.customerName)
            setPhoneNumber(customer.phoneNumber)
            setAddress(customer.address)
        }
        else {
            setCustomerName('')
            setPhoneNumber('')
            setAddress('')
        }
    }

    useEffect(() => {
        refresh()
    }, [customer])

    return (
        <div className="container-fluid">
            <div className="row">
                <label htmlFor="" className="col">Tên khách hàng</label>
                <input type="text" className="col" id="" placeholder="Tên khách hàng..." value={customerName} onChange={e => setCustomerName(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Số điện thoại</label>
                <input type="text" className="col" id="" placeholder="Số điện thoại..." value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Địa chỉ</label>
                <input type="text" className="col" id="" placeholder="Địa chỉ..." value={address} onChange={e => setAddress(e.target.value)} />
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-6" onClick={e => save()}>Lưu</button>
            </div>
        </div>
    )
}