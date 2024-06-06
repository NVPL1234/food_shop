import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { save } from "../redux/userSlice"
import { url } from "../url"
import Register from "../component/Register"
import "./Login.css"

export default function Login() {

    const [register, setRegister] = useState(false)
    const [phoneNum, setPhoneNum] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let login = async () => {
        try {
            const res = await axios.post(url + "api/login", {
                username: phoneNum,
                password: password
            })
            console.log(res.data.token);
            dispatch(save(res.data))
            navigate("/")
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
    }

    if (register)
        return <Register />

    return (
        <div className="container-fluid login-container">
            <div className="login">
                <h5 className="row login-title">ĐĂNG NHẬP</h5>
                <form className="row form-login mt-3">
                    <div className="row">
                        <label className="col-md-2" htmlFor="phone-num">Số điện thoại</label>
                        <input type="text" className="col-md" id="phone-num" placeholder="Số điện thoại..." value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
                    </div>
                    <div className="row mt-3">
                        <label className="col-md-2" htmlFor="password">Mật khẩu</label>
                        <input type="password" className="col-md" id="password" placeholder="Mật khẩu..." value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" className="col-md-4 mt-4 btn btn-success" onClick={login}>ĐĂNG NHẬP</button>
                </form>
                <div className="row mt-4">
                    <p>Bạn chưa có tài khoản? <span className="txt-register" onClick={e => setRegister(true)}>&nbsp; ĐĂNG KÝ</span></p>
                </div>
            </div>
        </div>
    )
}