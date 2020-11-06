import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapApiAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useHistory } from "react-router-dom";
//

export default function Login(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  /*
     this.state = {
         userLogin: {
             userName:'',
             passWord:''
         }
     }
     */
  // const [state, setState] = useState({
  //     userLogin: {
  //         userName: '',
  //         passWord: ''
  //     }
  // });
  const [userLogin, setUserLogin] = useState({
    userName: "",
    passWord: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    //Gọi api đăng nhập
    dispatch(dangNhapApiAction(userLogin, history));
  };

  return (
    <form className="container" onSubmit={login}>
      <h3 className="display-4 text-center">Login</h3>
      <div className="form-group">
        <p>userName</p>
        <input
          name="userName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>passWord</p>
        <input
          name="passWord"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
