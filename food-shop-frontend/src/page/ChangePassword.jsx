import axios from 'axios'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { url } from '../url'
import './ChangePassword.css'

export default function ChangePassword() {

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [hidden, setHidden] = useState(true)
    const user = useSelector((state) => state.user.value)

    let checkValidData = () => {
        if (newPassword == rePassword) {
            setHidden(true)
            return true
        }
        else {
            setHidden(false)
            return false
        }
    }

    let changePassword = async () => {
        if (checkValidData()) {
            let res = await axios.put(url + 'users?userId=' + user.userId + '&oldPassword=' + password + '&newPassword=' + newPassword, {}, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            if (res.data == 1)
                alert('Đổi mật khẩu thành công!')
            else
                alert('Đổi mật khẩu thất bại!')
        }
    }

    return (
        <div className="container-fluid">
            <Nav />
            <div className='row mt-3' style={{ backgroundColor: 'white', padding: '2%' }}>
                <div className='row'>
                    <label htmlFor="password">Nhập mật khẩu hiện tại</label>
                    <input type="password" id='password' placeholder="Mật khẩu hiện tại..." value={password} onChange={e => setPassword(e.target.value)} style={{ width: '20%' }} />
                    <label className='mt-5' htmlFor="new-password">Nhập mật khẩu mới</label>
                    <input type="password" id='new-password' placeholder="Mật khẩu mới..." value={newPassword} onChange={e => setNewPassword(e.target.value)} style={{ width: '20%' }} />
                    <label className='mt-5' htmlFor="re-password">Nhập lại mật khẩu mới</label>
                    <input type="password" id='re-password' placeholder="Nhập lại mật khẩu mới..." value={rePassword} onChange={e => setRePassword(e.target.value)} onBlur={e => checkValidData()} style={{ width: '20%' }} />
                    <label className='mt-2' style={{ color: 'red' }} hidden={hidden}>Mật khẩu lặp lại không khớp</label>
                </div>
                <div className='row mt-5'>
                    <button type="button" className='btn btn-success' onClick={e => changePassword()} style={{ width: '20%' }}>Đổi mật khẩu</button>
                </div>
            </div>
            {user.roleId == 1 && <Footer />}
        </div>
    )
}