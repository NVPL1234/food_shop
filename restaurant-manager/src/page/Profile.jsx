import axios from 'axios'
import Customer from '../component/Customer'
import Employee from '../component/Employee'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { url } from '../url'

export default function Profile() {

    const user = useSelector((state) => state.user.value)
    const userId = user.userId
    const token = user.token
    const roleId = user.roleId
    const [customer, setCustomer] = useState({})
    const [employee, setEmployee] = useState({})

    let getData = async () => {
        try {
            let res
            if(roleId == 1) {
                res = await axios.get(url + 'customers/id?customerId=' + userId, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                setCustomer(res.data)
            }                
            else {
                res = await axios.get(url + 'employees/id?id=' + userId, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                setEmployee(res.data)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container-fluid">
            <Nav />
            {roleId == 1 && <Customer customer={customer} />}
            {roleId == 2 && <Employee employee={employee} />}
            {roleId == 1 && <Footer />}
        </div>
    )
}