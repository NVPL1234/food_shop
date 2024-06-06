import { LuRefreshCw } from "react-icons/lu";
import { TfiSearch } from "react-icons/tfi";
import { GoPencil } from "react-icons/go";
import Nav from "../component/Nav"
import "./UpdateProduct.css"

export default function UpdateCustomer() {
    return (
        <div className="container-fluid">
            <Nav />
            <div className="row mt-3">
                <button type="button" className="col-md-1 btn btn-primary me-2">THÊM</button>
                <button type="button" className="col-md-1 btn btn-danger me-2">XOÁ</button>
                <input type="text" className="col-md txt-product-id me-2" placeholder="Mã khách hàng..." />
                <button type="button" className="col-md-1 btn btn-success me-2"><TfiSearch /></button>
                <button type="button" className="col-md-1 btn btn-warning"><LuRefreshCw color="white" /></button>
            </div>
            <div className="row mt-3 table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Chọn</label>
                                </div>
                            </th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className="form-check-input" type="checkbox" /></td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td><GoPencil className="i-edit" onClick={e => alert('edit')} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row mt-3 page-num">
                <button type="button" className="col-md-1 shadow-sm">1</button>
                <button type="button" className="col-md-1 shadow-sm">2</button>
                <button type="button" className="col-md-1 shadow-sm">3</button>
                <button type="button" className="col-md-1 shadow-sm">...</button>
                <button type="button" className="col-md-1 shadow-sm">7</button>
                <button type="button" className="col-md-1 shadow-sm">8</button>
                <button type="button" className="col-md-1 shadow-sm">9</button>
            </div>
        </div>
    )
}