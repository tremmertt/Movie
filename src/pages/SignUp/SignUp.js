import React from "react";
import "./SignUp.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="login">
      <div className="signUp-form">
        <form>
          <h3 className="text-center">Đăng ký tài khoản</h3>
          <div className="form-group">
            <p>Tài Khoản</p>
            <input name="taiKhoan" className="form-control formSignUp" />
          </div>
          <div className="form-group">
            <p>Tên người dùng</p>
            <input name="hoTen" className="form-control formSignUp" />
          </div>
          <div className="form-group">
            <p>Mật Khẩu</p>
            <input
              name="matKhau"
              type="password"
              className="form-control formSignUp"
            />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input
              name="email"
              type="email"
              className="form-control formSignUp"
            />
          </div>

          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              name="soDt"
              type="phoneNumber"
              className="form-control formSignUp"
            />
          </div>

          <div className="form-group text-center mt-4">
            <button className="btnSignUp w-100 " type="submit">
              Đăng ký
            </button>
          </div>
          <div className="form-group text-center">
            <p>
              Bạn đã có tài khoản ? <NavLink to="/login">Đăng nhập</NavLink>
            </p>
          </div>
        </form>
        <NavLink to="/home" className="btnClose">
          <CloseCircleOutlined />
        </NavLink>
      </div>
    </div>
  );
}
