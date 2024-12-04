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
    const [customer, setCustomer] = useState({})
    const [employee, setEmployee] = useState({})

    let getData = async () => {
        try {
            let res
            if(user.roleId == 1) {
                res = await axios.get(url + 'customers/id?customerId=' + user.userId, {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                })
                setCustomer(res.data)
            }                
            else {
                res = await axios.get(url + 'employees/id?id=' + user.userId, {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
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
            {user.roleId == 1 && <Customer customer={customer} />}
            {user.roleId == 2 && <Employee employee={employee} />}
            {user.roleId == 1 && <Footer />}
        </div>
    )
}