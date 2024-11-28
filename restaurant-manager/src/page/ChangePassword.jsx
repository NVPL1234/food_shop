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
    const user = useSelector((state) => state.user.value)

    let changePassword = async () => {
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

    return (
        <div className="container-fluid">
            <Nav />
            <div className='row mt-5' style={{ justifyContent: 'center' }}>
                <label htmlFor="password" className='col-sm-3'>Nhập mật khẩu hiện tại</label>
                <input type="password" id='password' className='col-sm-3' placeholder="Mật khẩu hiện tại..." value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='row mt-3' style={{ justifyContent: 'center' }}>
                <label htmlFor="new-password" className='col-sm-3'>Nhập mật khẩu mới</label>
                <input type="password" id='new-password' className='col-sm-3' placeholder="Mật khẩu mới..." value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <div className='row mt-3' style={{ justifyContent: 'center' }}>
                <label htmlFor="re-password" className='col-sm-3'>Nhập lại mật khẩu mới</label>
                <input type="password" id='re-password' className='col-sm-3' placeholder="Nhập lại mật khẩu mới..." value={rePassword} onChange={e => setRePassword(e.target.value)} />
            </div>
            <div className='row mt-5' style={{ justifyContent: 'center', marginBottom: '10%' }}>
                <button type="button" className='col-sm-6 btn btn-success' onClick={e => changePassword()}>Đổi mật khẩu</button>
            </div>
            {user.roleId == 1 && <Footer />}
        </div>
    )
}