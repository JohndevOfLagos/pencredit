import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import brandLogo from "assets/Brank-Logo-Primary-blue.png";
import { Link } from 'react-router-dom';
import { Header } from 'components/header/Header';
// import { Loading } from 'components/loading/Loading';
import "./login.scss";
import {inputs} from "./input-data"
import { FormInput } from 'components/form-input/FormInput';

import { useState } from 'react';
export const Login = () => {

    const auth = JSON.parse(localStorage.getItem("token"));

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    let navigate = useNavigate();

    const InputHandler = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    let {email, password} = values;

    
        
    if(email === "rowlandprice@army.mil" && password === "Price001@"){
        localStorage.setItem("token", true );
        navigate("/user/dashboard");
       
       
    }else{
        console.log(alert("Invalid email or password"))
    }


    }

    return (
        <React.Fragment>
           
        <Header/>

       {
         auth ? <Navigate to="/" replace={true}/>:     (<div className='login-page'>
         <div className='login-page__content'>

             <header className='login-page__header'>
                 <div className='image-block login__logo'>
                     <img src={brandLogo} alt="" />
                 </div>
             </header>
             <article className='login-page__auth'>

                 <form className='login-page__form' onSubmit={handleSubmit}>
                     <h2 className='login-page__heading'>Log in</h2>
                     {
                         inputs.map((input, index) => (<FormInput key={index} {...input} onChange={InputHandler} value={values[input.name]}/>))
                     }
                 
                     <div className='input-block button-block'>
                         <button className='login-button'>
                             Log in
                         </button>
                     </div>
                 </form>
                 <nav className='login-page__nav-1'>
                     <ul>
                         <li>
                             <Link className='nav-link'>
                                 Unlock account?
                             </Link>
                         </li>
                         <li>
                             <Link className='nav-link'>
                                 Forgot email address?
                             </Link>
                         </li>
                         <li>
                             <Link className='nav-link'>
                                 Help?
                             </Link>
                         </li>
                     </ul>
                 </nav>
                 <div className='login-page__user-creation'>
                     <span>Dont have an account?</span>
                     <Link className='nav-link'>Open an account</Link>
                 </div>
             </article>
         </div>
         <footer className='login-page__footer'>
             <nav className='login-page__footer-nav'>
                 <ul>
                     <li>
                         <Link className='nav-link'>
                             Contact support
                         </Link>
                     </li>
                     <li>
                         <Link className='nav-link'>
                             Privacy
                         </Link>
                     </li>
                     <li>
                         <Link className='nav-link'>
                             Terms & Conditions
                         </Link>
                     </li>
                     <li>
                         <Link className='nav-link'>
                             Cookies
                         </Link>
                     </li>
                     <li>
                         <Link className='nav-link'>
                             Trade Marks
                         </Link>
                     </li>

                 </ul>

             </nav>
         </footer>


     </div>) 
       }

        </React.Fragment>
    )
}

