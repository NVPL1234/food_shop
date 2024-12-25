import { useState } from "react"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app, auth } from '../config'
import Login from "../page/Login"
import { url } from "../url"
import axios from "axios";

export default function Register() {

  const [login, setLogin] = useState(false)
  const [name, setName] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  let setupRecapcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.signup();
      }
    });
  }

  let signup = (event) => {

    event.preventDefault()

    setupRecapcha()

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();

    let formattedPhoneNumber = '+84' + phoneNum.slice(1, 10)

    signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(formattedPhoneNumber);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;

        const code = window.prompt("Nhập OTP: ")
        confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          save()
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error)
        });
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error)
      });
  }

  let save = async () => {
    try {
      await axios.post(url + "api/register", {
        username: phoneNum,
        password: password,
        role: {
          roleId: 1
        },
        customerName: name,
        phoneNumber: phoneNum,
        address: address
      })
      console.log("Success!");
    } catch (error) {
      console.log(error);
    }
  }

  if (login)
    return <Login />

  return (
    <div className="container-fluid register-container">
      <div className="register">
        <h5 className="row register-title">ĐĂNG KÝ</h5>
        <form className="row form-register mt-3">
          <div className="row">
            <label className="col-3" htmlFor="name">Họ và tên</label>
            <input type="text" className="col" id="name" placeholder="Họ và tên..." value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="row mt-3">
            <label className="col-3" htmlFor="phone-num">Số điện thoại</label>
            <input type="text" className="col" id="phone-num" placeholder="Số điện thoại..." value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
          </div>
          <div id="sign-in-button"></div>
          <div className="row mt-3">
            <label className="col-3" htmlFor="address">Địa chỉ</label>
            <input type="text" className="col" id="address" placeholder="Địa chỉ..." value={address} onChange={e => setAddress(e.target.value)} />
          </div>
          <div className="row mt-3">
            <label className="col-3" htmlFor="password">Mật khẩu</label>
            <input type="password" className="col" id="password" placeholder="Mật khẩu..." value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="row mt-3">
            <label className="col-3" htmlFor="repeat-password">Nhập lại mật khẩu</label>
            <input type="password" className="col" id="repeat-password" placeholder="Nhập lại mật khẩu..." value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
          </div>
          <button type="button" className="col-4 mt-4 btn btn-success" onClick={signup}>ĐĂNG KÝ</button>
        </form>
        <div className="row mt-2">
          <p>Bạn đã có tài khoản? <span className="txt-login" onClick={e => setLogin(true)}>&nbsp; ĐĂNG NHẬP</span></p>
        </div>
      </div>
    </div>
  )
}