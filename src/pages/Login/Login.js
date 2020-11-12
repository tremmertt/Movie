import React from "react";
import "./Login.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <form>
          <h3 className="text-center">Đăng nhập</h3>
          <div className="form-group">
            <p>Tài Khoản</p>
            <input name="userName" className="form-control formLogin" />
          </div>
          <div className="form-group">
            <p>Mật Khẩu</p>
            <input
              name="passWord"
              type="password"
              className="form-control formLogin"
            />
          </div>
          <div className="form-group text-center mt-4">
            <button className="btnLogin w-100 " type="submit">
              Đăng Nhập
            </button>
          </div>
          <div className="form-group text-center">
            <p>
              Bạn chưa có tài khoản ? <NavLink to="/signup">Đăng Ký</NavLink>
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
