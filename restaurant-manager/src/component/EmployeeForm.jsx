import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { url } from "../url"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function EmployeeForm(prop) {

    const employee = prop.employee
    const getData = prop.getData
    const token = useSelector((state) => state.user.value.token)
    const activePage = useSelector((state) => state.activePage.value)
    const [img, setImg] = useState(null)
    const [imgPath, setImgPath] = useState('')
    const inputFileRef = useRef(null)
    const [employeeName, setEmployeeName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [idCardNumber, setIdCardNumber] = useState('')
    const storage = getStorage();

    let onChangeFile = (e) => {
        let file = e.target.files[0]
        setImg(file)
        setImgPath(URL.createObjectURL(file))
    }

    let save = async () => {
        if (img != null) {
            const storageRef = ref(storage, 'img/' + img.name);
            console.log("uploading...");
            await uploadBytes(storageRef, img, { contentType: img.type }).then((snapshot) => {
                console.log('upload success!');
            });
            console.log('saving...');
            getDownloadURL(storageRef)
                .then(async (imgPath) => {
                    try {
                        await axios.post(url + 'employees', {
                            employeeId: employee != null ? employee.employeeId : null,
                            imgPath: imgPath,
                            employeeName: employeeName,
                            phoneNumber: phoneNumber,
                            address: address,
                            idCardNumber: idCardNumber
                        }, {
                            headers: {
                                'Authorization': 'Bearer ' + token
                            }
                        })
                    } catch (error) {
                        console.log(error.message);
                    }
                })
                .catch((error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                    }
                });
        }
        else {
            try {
                await axios.post(url + 'employees', {
                    employeeId: employee != null ? employee.employeeId : null,
                    imgPath: imgPath,
                    employeeName: employeeName,
                    phoneNumber: phoneNumber,
                    address: address,
                    idCardNumber: idCardNumber
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
            } catch (error) {
                console.log(error.message);
            }
        }
        getData(activePage - 1)
        console.log('save success!');
    }

    let refresh = () => {
        if (employee != null) {
            setImgPath(employee.imgPath)
            setEmployeeName(employee.employeeName)
            setPhoneNumber(employee.phoneNumber)
            setAddress(employee.address)
            setIdCardNumber(employee.idCardNumber)
        }
        else {
            setImgPath('')
            setEmployeeName('')
            setPhoneNumber('')
            setAddress('')
            setIdCardNumber('')
        }
        inputFileRef.current.value = ''
    }

    useEffect(() => {
        refresh()
    }, [employee])

    return (
        <div className="container-fluid">
            <div className="row">
                <img src={imgPath} alt="" />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Chọn hình</label>
                <input ref={inputFileRef} type="file" className="col" id="" onChange={e => onChangeFile(e)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Tên nhân viên</label>
                <input type="text" className="col" id="" placeholder="Tên nhân viên..." value={employeeName} onChange={e => setEmployeeName(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Số điện thoại</label>
                <input type="text" className="col" id="" placeholder="Số điện thoại..." value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Địa chỉ</label>
                <input type="text" className="col" id="" placeholder="Địa chỉ..." value={address} onChange={e => setAddress(e.target.value)} />
            </div>
            <div className="row mt-3">
                <label htmlFor="" className="col">Số CMND/CCCD</label>
                <input type="text" className="col" id="" placeholder="Số CMND/CCCD..." value={idCardNumber} onChange={e => setIdCardNumber(e.target.value)} />
            </div>
            <div className="row mt-3" style={{ justifyContent: 'right' }}>
                <button type="button" className="btn btn-success col-6" onClick={e => save()}>Lưu</button>
            </div>
        </div>
    )
}