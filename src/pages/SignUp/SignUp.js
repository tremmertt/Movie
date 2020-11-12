import React from 'react';
import { NavLink } from "react-router-dom";
import "./SignUp.scss"

export default function SignUp() {
    return (
      <div className="dangKy row">
        <div className="col-3"></div>
        <form className="container col-6">
          <h3 className="display-4 text-center">Đăng Ký </h3>
          <div className="form-group">
            <p> Họ Tên </p>
            <input type="text" name="userName" className="form-control" placeholder="username" />
          </div>
          <div className="form-group">
            <p> Tài Khoản </p>
            <input type="text" name="account" className="form-control" placeholder="Account" />
          </div>
          <div className="form-group">
            <p> Mật Khẩu </p>
            <input type="password" name="passWord" className="form-control" placeholder="password" />
          </div>
          <div className="form-group">
            <p> Email </p>
            <input type="email" name="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <p> Số Điện Thoại </p>
            <input type="text" name="phonenumber" className="form-control" placeholder="Enter phone number" />
          </div>
          <div className="form-group">
            <p> Mã Nhóm </p>
            <input type="text" name="maNhom" className="form-control" placeholder="Group ID" />
          </div>
          <div className="form-group">
            <p> Mã Loại Người Dùng </p>
            <input type="text" name="maLoaiNguoiDung" className="form-control" placeholder="ID User" />
          </div>
          <div className="form-group text-center">
            <button className="btn btn-success" type="submit"> Đăng Ký </button>
          </div>
          <div className="form-group">
            <p>Bạn đã có tài khoản ? <NavLink  to="/login"> Đăng Nhập</NavLink> </p>
          </div>
        </form>
        <div className="col-3"></div>
      </div>
    );
}