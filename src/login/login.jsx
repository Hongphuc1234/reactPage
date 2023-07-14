import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../loginForm/loginForm";
import axios from 'axios'; // THÊM IMPORT AXIOS
import Header from "../header/header";

const Login = () => {


  return (  
   
      // <form onSubmit={handleSubmit}>
      //   <h3>Please login.</h3>
      //   {message && <p classNameName="text-success">{message}</p>}
      //   {errorMessage && <p classNameName="text-error">{errorMessage}</p>}
      //   <div classNameName="form-group">
      //     <label htmlFor="phone">phone address</label>
      //     <input type="phone" classNameName="form-control"
      //       id="phone" aria-describedby="phoneHelp"
      //       value={phone} onChange ={(event) => setPhone(event.target.value)}/>
      //      <small id="phoneHelp" classNameName="form-text text-muted">We'll never share your phone with anyone else.</small>
      //    </div>
      //    <div classNameName="form-group">
      //      <label htmlFor="password">Password</label>
      //      <input type="password" classNameName="form-control"
      //        id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
      //    </div>
      //    <div classNameName='form-group' style={{marginTop: '2vh'}}>
      //      <button type="submit" classNameName="btn btn-primary">Submit</button>
      //      &nbsp; <a href="/">Back to Home</a>
      //    </div>

    
   
   <section className="vh-100 w-100">
    <Header/>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    <LoginForm />
      </div>
    </div>
  </div>

</section>

  );
};
export default Login

