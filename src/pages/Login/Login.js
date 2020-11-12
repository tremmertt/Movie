import React from 'react'
import "./Login.scss";
import { NavLink } from "react-router-dom"

export default function Login() {
  return (
    <div className="dangNhap row">
      <div className="col-3"></div>
      <form className="container col-6">
        <h3 className="display-4 text-center">Đăng Nhập </h3>
        <div className="form-group">
          <p> Tài Khoản </p>
          <input name="userName" className="form-control"/>
        </div>
        <div className="form-group">
          <p>  Mật Khẩu </p>
          <input name="passWord" className="form-control"/>
        </div>
        <div className="form-group">
          <button className="btn btn-success " type="submit"> Đăng Nhập </button>
        </div>
        <div className="form-group">
          <p> Bạn chưa có tài khoản ? <NavLink to="/signup"> Đăng Ký </NavLink> </p>
        </div>
      </form>
      <div className="col-3"></div>
    </div>
  )
}

